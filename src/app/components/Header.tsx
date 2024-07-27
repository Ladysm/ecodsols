import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { House } from 'lucide-react';


const Header = () => {
  return (
    <header className='flex justify-center items-center w-full'>
      <div className='flex justify-between gap-8 py-3 px-5 max-w-4xl w-full'>
      <div className='min-w-32 flex gap-2'>
        <Image className='w-full' src="/logo.svg" alt='logo' width={90} height={90}/>
        <div className='flex flex-col items-center justify-center '><h5 className='text-md text-nowrap leading-5'>ECO D SOL</h5>
        <p className='text-sm leading-4'>Corporación</p></div>
      </div>
     <nav className='flex items-center text-md'>
      <ul className='flex justify-between gap-4'>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Donaciones</li>
        <li>Eventos</li>
      </ul>
     </nav>
     <Link className='flex items-center bg-yellow  rounded-full px-5 gap-2 text-sm' href="#"><House size={16}  />Contact </Link>
     </div>
    </header>
    
  )
}

export default Header