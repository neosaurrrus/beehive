'use client';
import {Player} from "@/types"
import HandCard from './HandCard/HandCard';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const cardsToUse = [0,1,2,3,5,8,13,20,40]
export default function Hand({currentPlayer}: {currentPlayer: Player}) {


  const renderCards = () => {
    return cardsToUse.map((cardScore, index) => {
      return <HandCard key={index} score={cardScore} playerId={currentPlayer.id}/>
    })
  }
  return (
    <section className='bg-sectionBackground rounded-3xl p-8 h-36 shadow-xl flex justify-center items-center'>
       {currentPlayer.score ? <p className={`text-4xl text-accent font-semibold  ${spaceGrotesk.className}`}>You played {currentPlayer.score}, waiting for others...</p> : renderCards()}
    </section>
  )
}
