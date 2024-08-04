import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-center items-center text-dark">
      <div className="flex justify-center  flex-col max-w-6xl w-full pt-10">
        <div className="flex  justify-between w-full border-b border-dark/50  py-5">
          <div className='min-w-36 flex gap-2 items-start'>
            <div className="flex gap-2">
            <Image className='w-16' src="/logo.svg" alt='logo' width={80} height={80} />
            <div className='flex flex-col items-center justify-center'>
              <h5 className='text-md text-nowrap leading-5 font-medium'>ECO D SOL</h5>
              <p className='text-sm leading-4'>Corporación</p></div>
            </div>
          </div>

         <div className="flex gap-10">
         <div className="flex flex-col ">
            <ul className=" flex flex-col gap-2">
              <li className="font-semibold">RESOURCES</li>
              <li>Help center</li>
              <li>Platform status</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-2">
              <li className="font-semibold">RESOURCES</li>
              <li>Help center</li>
              <li>Platform status</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-2">
              <li className="font-semibold">RESOURCES</li>
              <li>Help center</li>
              <li>Platform status</li>
              <li>Community</li>
            </ul>
          </div>
         </div>

         <div className="flex gap-10">
         <div className="flex flex-col ">
            <ul className=" flex flex-col gap-2">
              <li className="font-semibold">RESOURCES</li>
              <li>Help center</li>
              <li>Platform status</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-2">
              <li className="font-semibold">RESOURCES</li>
              <li>Help center</li>
              <li>Platform status</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>
         </div>
        </div>
        <div className="flex py-4 justify-between gap-3">
          <ul className="flex gap-4">
            <li>Cookie Settings</li>
            <li>Anti-spam</li>
            <li>Privacy</li>
            <li>User Agreement</li>
            <li>Legal Notice</li>
          </ul>
          <span>© Ecodsol 2024. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
