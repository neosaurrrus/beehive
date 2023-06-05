
import {Player} from "@/types"
import HandCard from './HandCard/HandCard';
import {Paragraph} from "@/components/Text/Text"
const cardsToUse = [0,1,2,3,5,8,13,20,40]
export default function Hand({currentPlayer}: {currentPlayer: Player}) {


  const renderCards = () => {
    return cardsToUse.map((cardScore, index) => {
      return <HandCard key={index} score={cardScore} playerId={currentPlayer.id}/>
    })
  }
  return (
    <section className='bg-sectionBackground rounded-4xl p-8 h-36 shadow-xl flex justify-center items-center'>
       {currentPlayer.score ? <Paragraph extraClasses={`text-accent`}>You played {currentPlayer.score}</Paragraph> : renderCards()}
    </section>
  )
}
