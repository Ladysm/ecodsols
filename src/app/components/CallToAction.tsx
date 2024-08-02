import React from 'react'

export const CallToAction = () => {
  return (
    <section className='bg-white flex justify-center items-center  w-full '>
        <div className=' h-80 flex flex-col bg-custom-gradient-vertical  max-w-2xl justify-center items-center w-full rounded-b-full rounded-3xl py-8 gap-3'>
            <h2 className='text-4xl font-semibold'>¿Listo para empezar?</h2>
            <p className='text-xl'>Contacta con nosotros ahora</p>
            <button className='bg-dark rounded-full px-8 py-2 text-yellowDark mt-6'> Contactar</button>
        </div>
    </section>
  )
}
