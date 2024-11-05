'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../public/image/logo.png'
import smage16 from '../../public/image/smage16.webp'
import Link from 'next/link'






export default function Bar() {
  return <>





    <div  className=" mb-[75px]">
      {/* drawer init and show */}

      <div  className="flex justify-between py-3 fixed z-40 bg-black top-0 right-0 left-0">

        <Link href="/">
          <Image src={logo} className="  cursor-pointer mr-3 pt-2 w-[170px]" alt="مركز صيانة سميج"></Image>
        </Link>

        <button className=" z-40  text-white bg-bltext-black hover:bg-bltext-black focus:ring-4 focus:ring-wbg-bltext-black font-medium  text-sm px-5 py-2.5 dark:bg-black dark:hover:bg-bltext-black focus:outline-none dark:focus:ring-wbg-bltext-black" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
          <i className="fa-solid fa-bars text-3xl ml-3"></i>
        </button>
      </div>
      {/* drawer component */}
      <div id="drawer-navigation" className="z-50 fixed top-0 left-0 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-black" tabIndex={-1} aria-labelledby="drawer-navigation-label" >
        <h6 id="drawer-navigation-label" className="text-base  italic text-gray-500 uppercase dark:text-gray-400 font-extralight border-b-2 pb-2">قائمة صيانة سميج</h6>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-3 font-medium">

            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/stovegas" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة بوتاجاز سميج</span>
              </Link>
            </li>

            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/oven" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة فرن سميج</span>
              </Link>
            </li>



            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/refrigerator" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة ثلاجة سميج</span>
              </Link>
            </li>


            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/microwave" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة ميكروويف سميج</span>
              </Link>
            </li>





            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/Washingmachine" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة غسالة سميج</span>
              </Link>
            </li>



            <li>
              <Link type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" href="/dishwasher" className="flex shadow-lg bg-slate-900 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 italic font-mono hover:-translate-y-1 transition-all group">

                <span className="flex-1 ms-3 whitespace-nowrap">صيانة غسالة اطباق سميج</span>
              </Link>
            </li>


          </ul>
        </div>
        <Image src={smage16} className='h-60 mt-5' alt="مركز صيانة سميج"></Image>

      </div>

    </div>







































  </>
}
