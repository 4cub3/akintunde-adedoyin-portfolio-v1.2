import React from 'react'

type Props = {
    children:React.ReactNode
    isSticky:boolean
}

export const Title = ({children, isSticky}: Props) => {
  return (
    <label className={`md:hidden block w-screen ${isSticky ? "sticky top-0  backdrop-blur-lg" : ""} font-semibold py-4 px-15 bg-transparent uppercase text-zinc-100`}>
        {children}
    </label>
  )
}