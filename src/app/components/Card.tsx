import React from 'react'

interface card {
number: string
titule: string
description: string
}
export const Card = ({ number, titule, description }: card) => {
  return (
    <div className='flex flex-col w-2/3 max-w-2/3 h-1/2 max-h-fit border-2 border-black px-10 py-10 rounded-xl border-b-8 border-black gap-2'>
      <h2 className='text-6xl font-semibold'>{number}</h2>
      <h3 className='text-2xl font-semibold'>{titule}</h3>
      <p>{description}</p>

    </div>
  )
}
