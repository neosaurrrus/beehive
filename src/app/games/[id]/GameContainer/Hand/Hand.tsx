'use client';
import { supabase } from '@/lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import {Game, Player} from "@/types"

interface Props {
  game: Game, 
  players: Player[]
  currentPlayer: Player
}

export default function Hand({game, players = [], currentPlayer}: Props) {



  return (
      <section>
      
      <p>Player: {currentPlayer.id}- {currentPlayer.name}</p>
      </section>
  )
}
