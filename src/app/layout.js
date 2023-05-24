import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './components/Navbar'

const links = [{
  label:'Home',
  route: '/'
  }, {
  label:'About',
    route: '/about'
  }
]


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
            <ul>
              {links.map(({label,route})=>(
               <li key={route}>
                <Link href={route}>{label}</Link>
               </li> 
              ))}
            </ul>
          </nav>
        </header>
      {children}
      </body>
    </html>

    
    
  )
}
