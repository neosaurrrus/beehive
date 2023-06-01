
import { supabase } from '@/lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"


export default function HandCard({score, playerId = 0}: {score: number , playerId: number}) {

  const handlePlayerScore = async () => {
    const { error, data: playerData } = await supabase
      .from('players')
      .update ({ score: score })
      .eq('id', playerId)
      .select()

      error && console.log(error)

      console.log(playerData)
  }
    
  return (
      <button className="bg-gray-500 rounded-lg shadow-lg p-4 m-2" onClick={handlePlayerScore}>
        <p className="text-2xl">{score}</p>
      </button>
  )
}
