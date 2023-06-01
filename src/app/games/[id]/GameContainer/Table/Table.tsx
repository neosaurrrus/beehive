
import {Game, Player} from "@/types"
import { useState } from "react";

interface Props {
  players: Player[],
  isRevealed: boolean,
  currentPlayer: Player,
}
export default function Table({players, isRevealed, currentPlayer}: Props) {

  const renderPlayerScoreCards = () => {
    return players.map((player, index) => {
      if (player.score) {
        return <p key={index}>Player: {player.id}
          - {player.name} - {player.score} {player.id === currentPlayer.id && '- Current player'}</p>
      }
    })
  }

  return (
      <section>
        {isRevealed ? 'REVEALED MODE' : 'HIDDEN MODE'}
      {renderPlayerScoreCards()}
      </section>
  )
}
