'use client';

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient'
import {Player} from "@/types"
import { Heading1 } from "@/components/Text/Text";

export default function JoinGameForm({gameId}: {gameId: number}){
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: "",
    isLoading: false
  })
  const [playerData, setPlayerData] = useState<Player[]>()
  
  useEffect(() => { // Set Local storage and redirect if data has been fetched
    if (playerData) {
      localStorage.clear()
      localStorage.setItem('player_id', playerData[0]?.id.toLocaleString())
      localStorage.setItem('game_id', gameId.toLocaleString())
      router.push(`/games/${gameId}`)
      window.location.reload()
    }
  }, [gameId, playerData, router])

  const handleJoinGameClick = async (e:FormEvent) => {
    e.preventDefault()
    setFormState({...formState, isLoading: true})
  
    const { error, data: playerData } = await supabase
      .from('players')
      .insert({ name: formState.name, game_id: gameId})
      .select()
    

    if (error) {
      console.log(error)
    }
     playerData && setPlayerData(playerData) 
    }


    const inputClasses = 'bg-transparent border-2 rounded-4xl h-8 px-4 py-6 '
    return (
      <form className="flex flex-col gap-8 w-2/4 min-w-[600px] bg-sectionBackground p-12 rounded-4xl shadow-2xl" onSubmit={handleJoinGameClick}>
        <Heading1 extraClasses='text-center w-full mt-2'>Join a game</Heading1>
        <div className='flex flex-col gap-4'>
          <label>Your Name (what other team members will see)</label>
          <input className={inputClasses} type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
          <button 
           className={`${formState.isLoading ? 'bg-accent/50' : 'bg-accent/75'} text-darkText font-semibold tracking-wide p-4 rounded-4xl shadow-xl w-48 h-16 hover:bg-accent duration-200`}
          >
            Join Game
          </button>
        </div>
      </form>
    )

}
