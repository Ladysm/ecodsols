"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Handshake, House } from 'lucide-react'

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<String>("");
  let lastScrollY = 0;

  const stateHeaderScroll = () => {
    if (window.scrollY >= 20) {
      setScrollHeader(true)
      if (window.scrollY > lastScrollY) {
        // downscroll
        setScrollDirection("down")
      } else {
        // upscroll
        setScrollDirection("up")
      }
      lastScrollY = window.scrollY
    } else {
      setScrollHeader(false)
      setScrollDirection("")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stateHeaderScroll)
    return () => { window.removeEventListener('scroll', stateHeaderScroll) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className={`flex justify-center items-center w-full fixed top-0 duration-300 ease z-20 ${scrollDirection === 'down' ? '-translate-y-24 scale-95' : ''} ${scrollDirection === 'up' ? 'translate-y-0 scale-100 mt-3' : ''}`}>
      <div className={`flex justify-between items-center gap-8 py-3 px-5 max-w-6xl w-full rounded-full ${scrollHeader ? 'bg-white shadow-sm' : ''}`}>
        <div className='min-w-36 flex gap-2 pe-10'>
          <Image className='w-12' src="/logo.svg" alt='logo' width={200} height={200} />
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
              <Link href="/">Equipo</Link>
            </li>
            <li>
              <Link href="/">Servicios</Link>
            </li>
            {/* <li>
              <Link href="/">Eventos</Link>
            </li> */}
          </ul>
        </nav>
        
        <div className='flex gap-1'>
        <Link className='flex items-center bg-yellow w-fit h-fit rounded-full py-2.5 px-5 gap-2 text-sm hover:bg-yellow/40 duration-200' href="#"><House size={16} />Contact </Link>
        {/* <Link className='flex items-center bg-customYellow/50 w-fit h-fit rounded-full py-2.5 px-5 gap-2 text-sm hover:bg-customYellow/40 duration-200' href="#"><Handshake size={16} />Donaciones </Link> */}
        
        </div>
      </div>
    </header>
  )
}

export default Header
