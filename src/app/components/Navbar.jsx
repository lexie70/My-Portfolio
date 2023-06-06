import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./Navbar.module.css"
import Link from 'next/link';


export default function Navbar() {
  
  
  
    return <>

    <section>

        <nav className={styles.nav} >
            <div>
                <Link href="/" className='link '>favicon</Link>
            </div>
            <div>
                 <h1 className={styles.bars}>MENU   
                    <span className='ms-1'><FontAwesomeIcon icon={faBars} /></span> 
                </h1>
            </div>

         
        </nav>
    </section>
        
        </> 
        }


