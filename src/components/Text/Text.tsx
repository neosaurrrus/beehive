import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

interface TextProps {
  children: React.ReactNode,
  extraClasses?: string,
}

export function Heading1({extraClasses, children}: {children: React.ReactNode, extraClasses?: string}) {
  return (
    <h1 className={`text-4xl font-semibold tracking-wide text-accent ${extraClasses} ${spaceGrotesk.className}`}>{children}</h1>
  )
}
export function Heading2({extraClasses, children}: {children: React.ReactNode, extraClasses?: string}) {
  return (
    <h2 className={`text-xl font-semibold tracking-wide text-accent ${extraClasses} ${spaceGrotesk.className}`}>{children}</h2>
  )
}
export function ButtonLabel({extraClasses, children}: {children: React.ReactNode, extraClasses?: string}) {
  return (
    <span className={`text-lg font-semibold tracking-wide text-darkText ${extraClasses} ${spaceGrotesk.className}`}>{children}</span>
  )
}

export function Paragraph({extraClasses, children}: {children: React.ReactNode, extraClasses?: string}) {
  return (
    <p className={`${extraClasses}`}>{children}</p>
  )
}
