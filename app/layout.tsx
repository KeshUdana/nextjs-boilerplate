import Link from "next/link"
import React from "react"
import {Roboto} from "next/font/google"
import './globals.css';

const robot_init=Roboto({
  subsets:['latin'],
  weight:['100','300','500'],
  variable:'--font-roboto',
});

export const metadata = {
  title: 'Keshawa Udana',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robot_init.variable}>
        <main>
          <nav className="fixed w-screen left-0 px-4 py-4 flex justify-between items-center bg-white/0 shadow-lg backdrop-blur-xl z-40">
            <ul className="flex justify-between w-full px-3 text-base text-lime-400">
              <li className=" hover:text-cyan-400"><Link href="#homepage">Homepage</Link></li>
              <li className=" hover:text-green-400"><Link href="#education">Academic</Link></li>
              <li className=" hover:text-orange-400"><Link href="#forgelab">Forge Lab</Link></li>
              <li className=" hover:text-rose-400"><Link href="#modde">Modde</Link></li>
              <li className=" hover:text-yellow-400"><Link href="#projects">Projects</Link></li>
            
              
             
              </ul>
          </nav>
        {children}</main></body>
    </html>
  )
}


