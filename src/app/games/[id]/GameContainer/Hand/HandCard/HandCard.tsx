
import { supabase } from '@/lib/supabaseClient'
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function HandCard({ score, playerId = 0 }: { score: number, playerId: number }) {
  const handlePlayerScore = async () => {
    const { error } = await supabase
      .from('players')
      .update({ score: score })
      .eq('id', playerId)

    error && console.log(error)
  }

  return (
    <motion.button
      className={`bg-accent text-darkText text-4xl text-center font-medium w-20 h-20 rounded-lg shadow-xl m-2 p-2 hover:bg-accent/75 duration-200 ${spaceGrotesk.className}`}
      initial={{ scale: 1.5, opacity: 0, rotate: 45, translateY: -50, translateX: -25 }}
      animate={{ rotate: 0, opacity: 1, scale: 1, translateY: 0, translateX: 0 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      onClick={handlePlayerScore}>
      {score}
    </motion.button>
  )
}
