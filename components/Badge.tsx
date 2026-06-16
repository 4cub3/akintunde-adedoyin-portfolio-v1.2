import React from 'react'

type Props = {
    label:string
}

export const Badge = ({label}: Props) => {
  return (
    <label className='px-6 py-2 rounded-full border text-[1rem] font-bold border-white/50 text-white bg-zinc-50/20'>{label}</label>
  )
}