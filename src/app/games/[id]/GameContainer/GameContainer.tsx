'use client';

import {Game as GameType,} from "@/types"
import JoinGameForm from "../JoinGameForm/JoinGameForm";
import { useEffect, useState } from "react";
import { Player } from "@/types";
import Header from "./Header/Header";

export default function GameContainer({game, players}: {game: GameType, players: Player[]}) {
  // const [localPlayerId, setLocalPlayerId] = useState<string>()
  // const [localGameId, setLocalGameId] = useState<string>()

  // why does localStorage cause rerenders, see blog postMessage...narrow down the scope
  // useEffect(() => { 
  //   if(!localPlayerId && !localGameId) {
  //     setLocalPlayerId(localStorage.getItem('player_id') || '')
  //     setLocalGameId(localStorage.getItem('game_id') || '')
  //   }
  // }, [game, localGameId, localPlayerId])

  // https://javascript.plainenglish.io/connecting-react-with-localstorage-ad590d4e4fa1
  

  // console.log('localPlayerId', localPlayerId)
  // console.log('localGameId', localGameId)
  // console.log('game.id', game.id.toString())
  // if (localPlayerId && localGameId === game.id.toString()) {
  //   console.log('rendering game')
  // }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <JoinGameForm gameId={game.id} />
    </main>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Header game={game} players={players} />
  </main>
  )
  
  
}


