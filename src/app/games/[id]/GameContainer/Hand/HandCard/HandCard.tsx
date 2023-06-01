
import { supabase } from '@/lib/supabaseClient'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function HandCard({score, playerId = 0}: {score: number , playerId: number}) {
  const handlePlayerScore = async () => {
    const { error } = await supabase
      .from('players')
      .update ({ score: score })
      .eq('id', playerId)

      error && console.log(error)
  }

  return (
      <button className={`bg-accent text-darkText text-4xl text-center font-medium w-20 h-20 rounded-lg shadow-xl m-2 p-2 hover:bg-accent/75 duration-200 ${spaceGrotesk.className}`} onClick={handlePlayerScore}>
        {score}
      </button>
  )
}
