
import {Game, Player} from "@/types"
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function HandCard({player, isRevealed, isCurrentPlayer}: {player: Player, isRevealed: boolean, isCurrentPlayer: boolean}) {

  const {score, name} = player

  return (
      <div className={`bg-accent text-darkText text-center font-medium w-32 h-40 rounded-lg
         flex flex-col justify-evenly items-center shadow-xl m-2 p-2 pt-12 gap-8 hover:bg-accent/7 5 duration-200 ${spaceGrotesk.className}`}>
          
            <div className='text-[4rem]'>
              {isRevealed ? score : '?'}
            </div>
            <div className='text-md truncate w-full'>
              {name}
            </div>
      </div>
  )
}
