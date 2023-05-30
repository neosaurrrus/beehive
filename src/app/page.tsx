import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Heading1>Mega Poker</Heading1>
     <section>
     <Heading2>Things to do</Heading2>
      <Paragraph>1. Setup Game</Paragraph>
      <Paragraph>2. Join a game</Paragraph>
      <Paragraph>3. Start a game</Paragraph>
     </section>
     <Link href="/setup">
      <span className="bg-green-400 text-white p-4 rounded-lg shadow-lg">Create Game</span>
      </Link>
    </main>
  )
}
