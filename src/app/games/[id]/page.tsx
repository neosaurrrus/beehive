import { supabase } from '@/lib/supabaseClient'
import GameContainer from './GameContainer/GameContainer'
import {Game} from "@/types"

export const revalidate = 0;

export default async function Game({ params }: { params: { id: string } }) {
  const game = await getGame(params.id)
  const players = await getPlayers(params.id)

  if (game && players) {
    return <GameContainer serverGame={game} serverPlayers={players} />
  } else { 
    return <div>Game not found</div>
  }
}

export async function getGame(id: string): Promise<Game> {
  const {data} = await supabase.from('games')
     .select()
     .eq('id', Number(id))
 if (!data) {
   throw new Error('Failed to fetch game data')
 }
  return data[0] 
}

export async function getPlayers(gameId: string) {
  const {data} = await supabase.from('players').select('*').eq('game_id', gameId)
  if (!data) {
    throw new Error('Failed to fetch player data')
  }

  return data
}