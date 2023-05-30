import SetupGameForm from "./SetupGameForm/SetupGameForm"
import {Heading1, Heading2, Paragraph} from "@/components/Text/Text"

export default function Setup() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Heading1>Create a new game</Heading1>
     <section>
     <Heading2>Things to do</Heading2>
      <Paragraph>1. Setup Game Form</Paragraph>
     </section>
     <SetupGameForm />
    </main>
  )
}
