

export function Heading1({children}: {children: React.ReactNode}) {
  return (
    <h1 className='text-3xl text-green-400'>{children}</h1>
  )
}
export function Heading2({children}: {children: React.ReactNode}) {
  return (
    <h1 className='text-xl text-red-400'>{children}</h1>
  )
}

export function Paragraph({children}: {children: React.ReactNode}) {
  return (
    <p className='text-blue-400'>{children}</p>
  )
}
