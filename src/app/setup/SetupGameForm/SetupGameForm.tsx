'use client';

import { useState } from "react";

export default function SetupGameForm(){

  const [formState, setFormState] = useState({
    name: "",
    gameName: ""
  })


    const handleSetupGameClick = () => {
      // post to Supabase, get the game id, and redirect to the game page
      console.log("handleSetupGameClick", formState)
    }

  return (
    <form className="flex flex-col">
      <label>Your Name (what other team members will see)</label>
      <input type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
      <label>Game Name</label>
      <input type="text" value={formState.gameName} onChange={e => setFormState({...formState, gameName: e.target.value})} />
      <button onClick={handleSetupGameClick} className="bg-green-400 text-white p-4 rounded-lg shadow-lg">Play Now</button>
    </form>
  )
}
