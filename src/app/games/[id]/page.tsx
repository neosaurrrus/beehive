import { supabase } from './../../../lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import Link from "next/link"

interface Game {
  name: string
  admin: string
  id: number
}

export default async function Game({ params }: { params: { id: string } }) {
  const game = await getGame(params.id) 
  const { name, admin} = game

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Heading1>{name}</Heading1>
     <section>
     <Heading2>{admin}</Heading2>
      <Paragraph>This is the game</Paragraph>
     </section>
     <Link href="/setup">
      <span className="bg-green-400 text-white p-4 rounded-lg shadow-lg">Create Game</span>
      </Link>
    </main>
  )
}

export async function getGame(id: string): Promise<Game> {
  let {data} = await supabase.from('games')
     .select()
     .eq('id', Number(id))


 if (!data) {
   throw new Error('Failed to fetch data')
 }
 
  return data[0] as Game
}
