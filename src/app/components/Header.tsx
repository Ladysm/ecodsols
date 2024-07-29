"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { House } from 'lucide-react';
import { useEffect, useState  } from 'react';



const Header = () => {
const [scrollHeader, setScrollHeader ] = useState (false);

const stateHeaderScroll = () => {
if(window.scrollY >= 20 ){
  setScrollHeader(true)
} else{
setScrollHeader(false)
}
}
useEffect(() => {
  window.addEventListener('scroll',stateHeaderScroll)
  return () => {window.removeEventListener('scroll',stateHeaderScroll)}
},[])

  return (
    <header className={`${scrollHeader && 'bg-white '}  flex justify-center items-center w-full fixed top-0 duration-200 z-20`}>
      <div className='flex justify-between items-center gap-8 py-3 px-5 max-w-4xl w-full'>
        <div className='min-w-36 flex gap-2'>
          <Image className='w-full' src="/logo.svg" alt='logo' width={160} height={160} />
          <div className='flex flex-col items-center justify-center'>
            <h5 className='text-md text-nowrap leading-5 font-medium'>ECO D SOL</h5>
            <p className='text-sm leading-4'>Corporación</p></div>
        </div>
        <nav className='flex items-center text-md'>
          <ul className='flex justify-between gap-4 items-center'>
            <li>
              <Link className='flex items-center bg-yellow w-fit h-fit rounded-full py-2 px-5 gap-2 text-sm hover:bg-yellow/40 duration-200' href="/">Inicio</Link>
            </li>
            <li>
            <Link href="/">Nosotros</Link>
            </li>
            <li>
            <Link href="/">Servicios</Link>
            </li>
            <li>
            <Link href="/">Donaciones</Link>
            </li>
            <li>
            <Link href="/">Eventos</Link>
            </li>
          </ul>
        </nav>
        <Link className='flex items-center bg-yellow w-fit h-fit rounded-full py-2.5 px-5 gap-2 text-sm hover:bg-yellow/40 duration-200' href="#"><House size={16} />Contact </Link>
      </div>
    </header>

  )
}

export default Header