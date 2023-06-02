import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"
import Link from "next/link"

export default function Home() {

  return (
     <section className='text-center flex flex-col gap-8 w-4/5'>
      <Heading1>Lukie`&apos`s Planning Poker of Mystery</Heading1>
      <Paragraph>Planning poker®, also called Scrum poker, is a consensus-based technique for estimating, mostly used to estimate effort or relative size of user stories in software development. In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.</Paragraph>
      <Paragraph>To read more, check out the Wikipedia page.</Paragraph>
      <Link href="/new">
        <span className="bg-accent text-darkText p-4 rounded-lg shadow-lg">Create Game</span>
      </Link>
     </section>
  )
}
