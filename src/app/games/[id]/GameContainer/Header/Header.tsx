'use client';
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import {Game, Player} from "@/types"

export default function Header({game, players = []}: {game: Game, players: Player[] }) {
  const { name, admin} = game || {name: '', admin: ''}

  const renderPlayers = () => {
    return players.map((player, index) => {
      return <span key={player.id}>{index !== 0 && ','} {player.name} </span>
    })
  }

  return (
      <section>
      <Heading1>{name}</Heading1>
      <Heading2>Created By {admin}</Heading2>
        <Paragraph>Players:{renderPlayers()} </Paragraph>
      </section>
  )
}
