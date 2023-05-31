'use client';

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient'
import {Player} from "@/types"

export default function JoinGameForm({gameId}: {gameId: number}){
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: "",
  })
  const [playerData, setPlayerData] = useState<Player[]>()
  
  useEffect(() => { // Set Local storage and redirect if data has been fetched
    if (playerData) {
      localStorage.clear()
      localStorage.setItem('player_id', playerData[0]?.id.toLocaleString())
      localStorage.setItem('game_id', gameId.toLocaleString())
      router.push(`/games/${gameId}`)
    }
  }, [gameId, playerData, router])

  const handleJoinGameClick = async (e:FormEvent) => {
    e.preventDefault()
  
    const { error, data: playerData } = await supabase
      .from('players')
      .insert({ name: formState.name, game_id: gameId})
      .select()
    

    if (error) {
      console.log(error)
    }
     playerData && setPlayerData(playerData) 
    }

  return (
    <form className="flex flex-col bg-teal-800" onSubmit={handleJoinGameClick}>
      <label>Your Name (what other team members will see)</label>
      <input className='bg-gray-400' type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
      <button className="bg-green-400 text-white p-4 rounded-lg shadow-lg">Join</button>
    </form>
  )
}
