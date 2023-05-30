import { supabase } from './../../../lib/supabaseClient'
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"

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
     <Heading1>Game Name:{name}</Heading1>
     <section>
     <Heading2>The Admin: {admin}</Heading2>
      <Paragraph>I am: </Paragraph>
     </section>
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
