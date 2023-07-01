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
    <div className="input-container">
      <label>Your name</label>
        <input placeholder="What's your name?"/>

      <label>Your email</label>
        <input placeholder="What's your email?"/>
        
      <div className="">
        <label>Service</label>
          <select>
            <option value="What are you interested in?">What are you interested in?</option>
            <option value="Need help with a one time project">Need help with a one time project</option>
            <option value="Looking for a longterm partnership">Looking for a longterm partnership</option>
            <option value="Want to hire me full-time">Want to hire me full-time</option>
            <option value="Just wanted to say hi!">Just wanted to say hi!</option>
          </select>
      </div>

      <div className="">
        <label>Budget</label>
        <select>
          <option value="What is your budget?">What is your budget?</option>
          <option value="$500 - $1000">$500 - $1000</option>
          <option value="$1000 - $2500">$1000 - $2500</option>
          <option value="$2500 - $5000">$2500 - $5000</option>
          <option value="$5000 or more">$5000 or more</option>
        </select>
      </div>

      <input placeholder="What's your message?"/>
      <div>
        {/* <FontAwesomeIcon icon={faMinus} /> */}
      </div>
      
    </div>
  </div>
  </>
}
        
      
    
      
  

  
