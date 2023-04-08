import Link from 'next/link'
import React from 'react'
import {TbGridDots} from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header>
    <div >
    {/* link tag helps us to go from one page to another without refreshing the page */}
    <Link href="https://mail.google.com"
    className="hover:underline">
        Gmail
    </Link>
    <Link href="https://image.google.com"
    className="hover:underline">
        Images
    </Link>
    <TbGridDots className="bg-transparent hover:bg-slate-200 rounded-full text-4xl p-2 hover:shadow-md transition-shadow"/>
    {/* styled the button  */}
    <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105">Sign in</button>
    </div>
    </header>
  )
}
