import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./Navbar.module.css"

export default function Navbar({prop}) {
    const links = [{
        label:'Home',
        route: '/'
        }, {
        label:'About',
          route: '/about'
        }
      ]
   
    return <>
        <nav className={styles.nav} >
            <h1 className='ms-3'>Alexandra </h1>
            <h1 className={styles.bars} > MENU   <span className='' ><FontAwesomeIcon icon={faBars} /></span> </h1>
        </nav>
        
        </> 
        }

// function ShowMenu({links}){
 
//         return<>
//         <ul>
//           {links.map(({label,route})=>(
//            <li key={route}>
//             <link href={route}>{label}</link>
//            </li> 
//           ))}
//         </ul>
   
//         </>


//           }
