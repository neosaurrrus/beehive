'use client';
import { supabase } from '@/lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import {Game, Player} from "@/types"

export default function Header({game, players, currentPlayer}: {game: Game, players: Player[], currentPlayer: Player }) {
  const { name, admin} = game || {name: '', admin: ''}

  const renderPlayers = () => {
    return players.map((player, index) => {
      return <span className='text-accent' key={player.id}>{index !== 0 && ','} {player.name} </span>
    })
  }

  const revealPlayerScores = async () => {
    const { error, data: gameData } = await supabase
      .from('games')
      .update({ is_revealed: !game.is_revealed })
      .eq('id', game.id)
      error && console.log(error)
  }

  const resetPlayerScores = async () => {
     await supabase
      .from('players')
      .update({ score: 0 })
      .eq('game_id', game.id)

      const { error: gameError, data: gameData } = await supabase
      .from('games')
      .update({ is_revealed: false })
      .eq('id', game.id)
      gameError && console.log(gameError)

  }

  const renderAdminButtons = () => (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <button 
        className={buttonClasses}
        onClick={revealPlayerScores}
        >{game.is_revealed ? 'Hide' : 'Reveal'}
      </button>

      <button
        className={buttonClasses}
        onClick={resetPlayerScores}
        >Reset
      </button>
    </div>
  )
  
  const buttonClasses='bg-accent text-darkText text-sm font-semibold tracking-wide p-4 rounded-4xl shadow-lg w-24 h-12 hover:bg-accent/75 duration-200'

  return (
      <section className='bg-sectionBackground rounded-3xl p-8 h-48 shadow-xl flex'>
        <div className='w-4/5 flex flex-col justify-center'>
          <Heading1>{name}</Heading1>
          <Heading2 extraClasses='text-lightText mt-2 mb-6'>Created by <span className='text-accent font-semibold'>{admin}</span></Heading2>
          <Paragraph extraClasses='font-semibold'>Participants:{renderPlayers()} </Paragraph>
        </div>

       {currentPlayer.is_admin && renderAdminButtons()}
      </section>
  )
}
