import Link from "next/link"
import React from "react"
import './globals.css';


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
      <body>
        <main>
          <nav className="fixed w-screen px-4 py-4 flex justify-between items-center bg-stone-950 text-white font-mono z-40">
            <ul className="flex justify-between w-full px-3 text-white">
              <li className=" hover:text-green-500"><Link href="#Education.tsx">Education</Link></li>
              <li className=" hover:text-orange-500"><Link href="#ForgeLab">Forge Lab</Link></li>
              <li className=" hover:text-purple-500"><Link href="#Modde">Modde</Link></li>
            </ul>
          </nav>
        {children}</main></body>
    </html>
  )
}


