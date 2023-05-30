'use client';

import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient'

export default function NewGameForm(){
  const router = useRouter()
  const [formState, setFormState] = useState({
    admin: "",
    gameName: ""
  })
  
  const handleNewGameClick = async (e:FormEvent) => {
    e.preventDefault()
    const { error, data } = await supabase
      .from('games')
      .insert({ name: formState.gameName, admin: formState.admin})
      .select()

      console.log(error, data)
    if (error) {
    } else if (data){
      localStorage.setItem('gameId', data[0].id.toString())
      localStorage.setItem('playerName', data[0].admin)
      router.push(`/games/${data[0].id}`)
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
