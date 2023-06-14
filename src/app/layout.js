import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first next 13</title>
      </head>
      <body>
            <Navbar/>
          <div className=' '>
              {children}
          </div>
        <Footer/>
      </body>
    </html>  
  )
}
