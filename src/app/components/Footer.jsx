import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import style from "./Footer.module.css"

export default function Footer() {
    return <div className={style.mainbox}>
    <ContactInformation title={"contact information"} text={"Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away."}
    email={"E : alexandracampos658@gmail.com"} phone={"P: +506 62619656"}/>
    <LatestProjects title={"latest projects"} text={"bla bla bla bla bl"}/>
    <CurrentAvailability title={"current availability"} text={"hola mundo"} />
    </div>
     
    }

 function ContactInformation({title,text,email,phone}){
return <div>
    <h3>{title}
        <span className='ms-1'>
        <FontAwesomeIcon icon={faMinus} />   
        </span>
    </h3>
    <p>{text}</p>
    <p>{email}<br/>{phone}</p>   
</div>
}

 function LatestProjects({title,text}){
return <div>
    <h3 className={style.h3}>{title}
        <span className='ms-1'>
        <FontAwesomeIcon icon={faMinus} />   
        </span>
    </h3>
    <p>{text}</p>  
</div>
}

function CurrentAvailability({title,text}){
    return <div>
         <h3 className={style.h3}>{title}
        <span className='ms-1'>
        <FontAwesomeIcon icon={faMinus} />   
        </span>
    </h3>
    <p>{text}</p>  
   </div>
}


        


