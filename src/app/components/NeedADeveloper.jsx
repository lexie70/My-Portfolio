import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import style from "./NeedADeveloper.module.css"
import Link from 'next/link';

export default function NeedADeveloper() {
    return <>

    <div className={`${style.mainbox} center-needadeveloper-text`}>
        <div className="centering">
            <h5 className={style.need}>need a developer?</h5>
            <Link href="/together">
                <h1 className= "text">
                    <span >Let's work Together</span>
                    <span>
                        <FontAwesomeIcon className='ms-1' icon={faArrowRight}/>
                    </span>
                </h1>
            </Link>
        </div>
        <hr className=''/>
    </div>
    </>
    }

     