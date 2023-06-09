import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faMinus} from '@fortawesome/free-solid-svg-icons';
import style from "./Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return <>

    <div className={style.mainbox}>
        <h5 className={style.need}>need a developer?</h5>
        <div className={style.link}>
            <Link href="/together">
                <span className={style.text}>Let's work together</span>
            </Link>
            <span>
                <FontAwesomeIcon className='ms-1' icon={faArrowRight}/>
            </span>
        </div>
        <hr/>
    </div>
    <ContactInformation title={"contact information"} text={"Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away."}
    email={"E : alexandracampos658@gmail.com"} phone={"P: +506 62619656"}/>
    <LatestProjects title={"latest projects"}/>
    </>
     
    }

 function ContactInformation({title,text,email,phone}){
return <div>
    <h3 className={style.h3}>{title}
        <span className='ms-1'>
        <FontAwesomeIcon icon={faMinus} />   
        </span>
    </h3>
    <p>{text}</p>
    <p>{email}{<br/>}{phone}</p>   
</div>
}
 function LatestProjects({title,text,email,phone}){
return <div>
    <h3 className={style.h3}>{title}
        <span className='ms-1'>
        <FontAwesomeIcon icon={faMinus} />   
        </span>
    </h3>
    <p>{text}</p>
    <p>{email}{<br/>}{phone}</p>   
</div>
}


        


