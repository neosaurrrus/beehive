'use client';
import { supabase } from '@/lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import {Game, Player} from "@/types"

export default function Header({game, players = []}: {game: Game, players: Player[] }) {
  const { name, admin} = game || {name: '', admin: ''}

  const renderPlayers = () => {
    return players.map((player, index) => {
      return <span key={player.id}>{index !== 0 && ','} {player.name} </span>
    })
  }

  return (
      <section>
      <Heading1>{name}</Heading1>
      <Heading2>Created By {admin}</Heading2>
        <Paragraph>Players:{renderPlayers()} </Paragraph>
      <Paragraph>Is revealed {game.is_revealed.toString()}</Paragraph>
      
      <button 
        className="bg-green-400 text-white p-4 rounded-lg shadow-lg"
        onClick={async () => {
          const { error, data: gameData } = await supabase
            .from('games')
            .update({ is_revealed: !game.is_revealed })
            .eq('id', game.id)
            .select()
        }}
        
        >{game.is_revealed ? 'Reveal' : 'Reset'}</button>
      </section>
  )
}
