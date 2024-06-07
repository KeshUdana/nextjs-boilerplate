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
          <nav className="fixed w-screen px-4 py-4 flex justify-between items-center bg-stone-950 text-white font-mono z-40">
            <ul className="flex justify-between w-full px-3 text-white">
              <li className=" hover:text-blue-500"><Link href="#homepage">Homepage</Link></li>
              <li className=" hover:text-green-500"><Link href="#education">Education</Link></li>
              <li className=" hover:text-orange-500"><Link href="#forgelab">Forge Lab</Link></li>
              <li className=" hover:text-purple-500"><Link href="#modde">Projects</Link></li>
            
              
             
              </ul>
          </nav>
        {children}</main></body>
    </html>
  )
}


