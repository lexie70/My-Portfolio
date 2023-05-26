import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first next 13</title>
      </head>
      <body>
        <header>
          <nav>
            <Navbar/>
          </nav>
        </header>
      {children}
      </body>
    </html>

    
    
  )
}
