import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./Navbar.module.css"
import Link from 'next/link';


export default function Navbar() {
  
  
  
    return <>
        <nav className={styles.nav} >
            <Link href="/" className='link'>favicon</Link>
            <h1 className={styles.bars}  > MENU   <span className='me-5' ><FontAwesomeIcon icon={faBars} /></span> </h1>
         
        </nav>
        
        </> 
        }


