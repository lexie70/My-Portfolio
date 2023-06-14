import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import style from "./NeedADeveloper.module.css"
import Link from 'next/link';

export default function NeedADeveloper() {
    return <>

    <div className={`${style.mainbox} center-needadeveloper-text`}>
        <div className={style.link}>
            <h5 className={style.need}>need a developer?</h5>
            <Link href="/together">
                <span className={style.text}>Let's work together</span>
            </Link>
            <span>
                <FontAwesomeIcon className='ms-1' icon={faArrowRight}/>
            </span>
        </div>
        <hr/>
    </div>
    </>
     
    }