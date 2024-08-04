import React from 'react'
import { Services } from '../config/list'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const Card = ({ number, name, type, description }: Services) => {
  return (
    <div className='relative flex flex-col w-full max-h-full min-h-full border-2 border-dark group p-4 rounded-xl cursor-pointer border-b-8 border-black gap-2 bg-yellowDark active:border-b-4 duration-200'>
      <Link href="/" className='absolute top-3 right-3 border rounded-full p-1 group-hover:bg-dark group-hover:text-yellowDark duration-200'>
        <ArrowUpRight size={20} />
      </Link>
      <h3 className='text-2xl font-semibold'>{number}</h3>
      <h3 className='text-base font-medium line-clamp-2'>{name}</h3>
      <p className='line-clamp-1 list-disc'>{description}</p>
    </div>
  )
}
