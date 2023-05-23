import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return <>
        <nav className="w-100" >
            <h1 className='ms-3'>Alexandra </h1>
            <h1 className="bars-nav" > MENU <FontAwesomeIcon icon={faBars} className='ms-2 me-3' /></h1>
        </nav>
        
        </> 
        }