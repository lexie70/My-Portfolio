import Link from "next/link"
import Image from "next/image"
import MapaCR from "../../../public/img/MapaCR.png"
// import {faMinus} from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (<>
  <div className="mobile large-screen">
    <div className="crmap-size">
      <Image src={MapaCR} alt="Costa Rica's map"/>
    </div>
    <div>
      <h5 className="">contact</h5>
      <h1>Get in touch - let's work together.</h1>
      <h5>address</h5>
      <h4>
        <b>
        Alexandra Campos<br/>
        Los Angeles<br/>
        San Rafael<br/>
        Heredia<br/>
        Costa Rica
        </b> 
      </h4>

    </div>
    <SendAMessage/>
  </div>
  </>
  )
}

function SendAMessage(){
  return<>
  <div>
    <h3>Got a project? Drop me a line if you want to work together on something exciting.
      Big or small. Mobile or web.
    </h3>
    <div>
      <label>
        Your name
      </label>
      <input placeholder="What's your name?"/>
      <label>
        Your email
      </label>
      <input placeholder="What's your email?"/>
      <label>
        Service
      </label>
      <input placeholder="What are you interested in?"/>
      <label>
        Budget
      </label>
      <input placeholder="What's your budget?"/>
      
      <input placeholder="What's your message?"/>
      <div>
        {/* <FontAwesomeIcon icon={faMinus} /> */}
      </div>
      
    </div>
  </div>
  </>
}
  

  
