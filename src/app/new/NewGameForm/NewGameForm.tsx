'use client';

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient'
import {Game, Player} from "@/types"

export default function NewGameForm(){
  const router = useRouter()
  const [formState, setFormState] = useState({
    admin: "",
    gameName: ""
  })
  const [playerData, setPlayerData] = useState<Player[]>()
  const [gameData, setGameData] = useState<Game[]>()

  useEffect(() => { // Set Local storage and redirect if data has been fetched
    if (playerData && gameData) {
      localStorage.clear()
      localStorage.setItem('player_id', playerData[0]?.id.toLocaleString())
      localStorage.setItem('game_id', gameData[0].id.toLocaleString())
      router.push(`/games/${gameData[0].id}`)
    }
  }, [gameData, playerData, router])
  
  const handleNewGameClick = async (e:FormEvent) => {
    e.preventDefault()
    const { error, data: gameData } = await supabase
      .from('games')
      .insert({ name: formState.gameName, admin: formState.admin})
      .select()
    if (error) {
      console.log(error)
    } else if (gameData){
      const { error, data: playerData } = await supabase
      .from('players')
      .insert({ name: formState.admin, game_id: gameData[0].id, is_admin: true})
      .select()
      setPlayerData(playerData)
      setGameData(gameData)
    }
  }

  return (
    <form className="flex flex-col bg-teal-800" onSubmit={handleNewGameClick}>
      <label>Your Name (what other team members will see)</label>
      <input className='bg-gray-400' type="text" value={formState.admin} onChange={e => setFormState({...formState, admin: e.target.value})} />
      <label>Game Name</label>
      <input className='bg-gray-400' type="text" value={formState.gameName} onChange={e => setFormState({...formState, gameName: e.target.value})} />
      <button className="bg-green-400 text-white p-4 rounded-lg shadow-lg">Play Now</button>
    </form>
  )
}
