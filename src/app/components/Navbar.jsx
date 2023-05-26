import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./Navbar.module.css"


export default function Navbar() {
  
  
  
    return <>
        <nav className={styles.nav} >
            <h1 className='ms-5'>Alexandra </h1>
            <h1 className={styles.bars}  > MENU   <span className='me-5' ><FontAwesomeIcon icon={faBars} /></span> </h1>
            
        </nav>
        
        </> 
        }


