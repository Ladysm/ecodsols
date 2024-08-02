import React from 'react'
import { Services } from '../config/list'

export const Card = ({ number, name, type, description }: Services) => {
  return (
    <div className='flex flex-col w-full   max-h-fit border-2 border-black px-10 py-10 rounded-xl border-b-8 border-black gap-2'>
      <p>{type}</p>
      <h2 className='text-6xl font-semibold'>{number}</h2>
      <h3 className='text-2xl font-semibold'>{name}</h3>
      <p>{description}</p>

    </div>
  )
}
