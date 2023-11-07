import {
  ButtonLabel,
  Heading1,
  Heading2,
  Paragraph,
} from "@/components/Text/Text";
import Link from "next/link";

export default function Home (): React.ReactElement {
  return (
    <section className="text-center flex flex-col gap-12 w-4/5">
      <Heading1>The Estimation Game</Heading1>
      <Heading2>
        The most fun you will ever have estimating... - <i>Me</i>
      </Heading2>
      <Paragraph>
        This is a clone of Planning poker to test some Next 13 and Supabase hookups. 
        If you don't know Planning Poker then let me explain. Members of the group
        make estimates by playing numbered cards face-down to the table, instead
        of speaking them aloud. The cards are revealed, and the estimates are
        then discussed. By hiding the figures in this way, the group can avoid
        the cognitive bias of anchoring, where the first number spoken aloud
        sets a precedent for subsequent estimates.
      </Paragraph>
      <Link href="/new">
        <span className="bg-accent/75 text-darkText font-semibold tracking-wide p-6 rounded-4xl shadow-xl h-16 hover:bg-accent duration-200">
          <ButtonLabel>Create Game</ButtonLabel>
        </span>
      </Link>
    </section>
  );
}

