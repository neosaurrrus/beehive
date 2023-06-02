
import {Game, Player} from "@/types"
import { Paragraph } from "@/components/Text/Text"
import TableCard from "./TableCard/TableCard";

interface Props {
  players: Player[],
  isRevealed: boolean,
  currentPlayer: Player,
}
export default function Table({players, isRevealed, currentPlayer}: Props) {

  const renderPlayerScoreCards = () => {
    return players.map((player, index) => {
      if (player.score) {
        return <TableCard player={player} isRevealed={isRevealed} isCurrentPlayer={player.id === currentPlayer.id} key={index}/>
      }
    })
  }


  const renderResult = () => {
   if ( players.every(player => player.score === currentPlayer.score)) {
      return <span>Everyone is in agreement!</span>
    } else {
      return <span>Not everyone is in agreement! Play again?</span>
    }
  }

  const renderStatus = () => {
    const numberOfPlayers = players.length
    const numberOfPlayersWithScore = players.filter(player => player.score).length
    if (numberOfPlayers === numberOfPlayersWithScore) {
      return <span>Everyone has played! Reveal?</span>
    } else {
      return <span className="animate-spin"> {numberOfPlayersWithScore} out of {numberOfPlayers} played so far... </span>
    }
  }
    

  return (
      <section className='bg-sectionBackground rounded-3xl p-4 h-72 shadow-xl flex flex-col justify-evenly items-center'>
        <Paragraph>
          {isRevealed ? renderResult() : (renderStatus())} 
        </Paragraph>
        <div className='flex gap-4'>
      {renderPlayerScoreCards()}

        </div>
      </section>
  )
}
