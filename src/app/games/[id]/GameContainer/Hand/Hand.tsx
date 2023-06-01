'use client';
import {Player} from "@/types"
import HandCard from './HandCard/HandCard';
import { useState } from "react";

const cardsToUse = [0,1,2,3,5,8,13,20,40]
export default function Hand({currentPlayer}: {currentPlayer: Player}) {


  return (
      <section>
        {!currentPlayer.score && cardsToUse.map((cardScore, index) => {
          return <HandCard key={index} score={cardScore} playerId={currentPlayer.id}/>
        })}
      
      <p>Player: {currentPlayer.id}- {currentPlayer.name} - { currentPlayer.score}</p>
      </section>
  )
}
