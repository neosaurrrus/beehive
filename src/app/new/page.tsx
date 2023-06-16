'use client';

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient'
import { Game, Player } from "@/types"
import { ButtonLabel, Heading1 } from "@/components/Text/Text";

export default function NewGameForm() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    admin: "",
    gameName: "",
    isLoading: false
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

  const handleNewGameClick = async (e: FormEvent) => {
    setFormState({ ...formState, isLoading: true })
    e.preventDefault()
    const { error, data: gameData } = await supabase
      .from('games')
      .insert({ name: formState.gameName, admin: formState.admin })
      .select()
    if (error) {
      console.log(error)
      setFormState({ ...formState, isLoading: false })
    } else if (gameData) {
      const { error, data: playerData } = await supabase
        .from('players')
        .insert({ name: formState.admin, game_id: gameData[0].id, is_admin: true })
        .select()
      setPlayerData(playerData)
      setGameData(gameData)
    }
  }

  const inputClasses = 'bg-transparent border-2 rounded-4xl h-8 px-4 py-6 '
  return (
    <form className="flex flex-col gap-8 w-2/4 min-w-[600px] bg-sectionBackground p-12 rounded-4xl shadow-2xl" onSubmit={handleNewGameClick}>
      <Heading1 extraClasses='text-center w-full mt-2'>Create a new game</Heading1>
      <div className='flex flex-col gap-4'>
        <label>Your Name (what other team members will see)</label>
        <input className={inputClasses} type="text" value={formState.admin} onChange={e => setFormState({ ...formState, admin: e.target.value })} />
      </div>
      <div className='flex flex-col gap-4'>
        <label>Game Name</label>
        <input className={inputClasses} type="text" value={formState.gameName} onChange={e => setFormState({ ...formState, gameName: e.target.value })} />
      </div>
      <div className='w-full flex items-center justify-center mt-4'>
        <button
          className={`${formState.isLoading ? 'animate-pulse' : 'bg-accent/75'} text-darkText font-semibold tracking-wide p-4 rounded-4xl shadow-xl w-48 h-16 hover:bg-accent duration-200`}
        >
          <ButtonLabel>{formState.isLoading ? 'Loading Game' : 'Play Now'}</ButtonLabel>
        </button>
      </div>
    </form>
  )
}
