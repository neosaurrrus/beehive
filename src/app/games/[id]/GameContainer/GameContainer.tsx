'use client';
import { supabase } from '@/lib/supabaseClient'
import {Game as GameType, Player} from "@/types"
import JoinGameForm from "../JoinGameForm/JoinGameForm";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Hand from "./Hand/Hand";
interface Payload<T>{
  commit_timestamp: string,
  errors: any[],
  eventType: string,
  new: T,
  old: T,
  schema: string,
  table: string,
}


export default function GameContainer({serverGame, serverPlayers}:{serverGame: GameType, serverPlayers: Player[]}) {

  const [players, setPlayers] = useState<Player[]>(serverPlayers)
  const [game, setGame] = useState<GameType>(serverGame)
  
  const currentPlayer = players?.find(player => player.id.toString() === localStorage.getItem('player_id'))


// Realtime stuff
  useEffect(() => {  // Inserts to Players
    const playersChannel = supabase.channel('Realtime Players').on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'players',
      filter: `game_id=eq.${serverGame.id}`,
    }, (payload: Payload<Player>) => {
      setPlayers([...players, payload.new])
    }).subscribe()

    return () => {
      supabase.removeChannel(playersChannel)
    }

  },[players, serverGame.id])

  useEffect(() => { // Updates to a particular player
    const playersUpdateChannel = supabase.channel('Realtime Players').on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'players',
      filter: `game_id=eq.${game.id}`,
    }, (payload: Payload<Player>) => {

      console.log(payload, 'payload')
      setPlayers(prev => {
        console.log(prev, 'prev')
        const newState = prev.filter(e => e.id !== payload.new.id).concat(payload.new)
        console.log(newState , 'newState')
        return newState
      });
    }).subscribe()

    return () => {
      supabase.removeChannel(playersUpdateChannel)
    }

  },[players, game.id])


  useEffect(() => { // Updates to Game State
    const gameChannel = supabase.channel('Realtime Game').on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'games',
      filter: `id=eq.${serverGame.id}`,
    }, (payload:Payload<GameType>) => {
      setGame(payload.new)
    }).subscribe()

    return () => {
      supabase.removeChannel(gameChannel)
    }

  },[serverGame.id])


  if (localStorage.getItem('game_id') !== serverGame.id.toString()) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <JoinGameForm gameId={serverGame.id} />
      </main>
    )
  }

  if(currentPlayer && game && players) {
    return (
      <section className='flex flex-col gap-8 w-3/4 min-w-[600px]'>
        {/* Lets try and make these as dumb as possible */}
        <Header game={game} players={players} currentPlayer={currentPlayer}/>
        <Table players={players} isRevealed={game.is_revealed} currentPlayer={currentPlayer}/>
        <Hand currentPlayer={currentPlayer}/>
      </section>
    )
  }
}


