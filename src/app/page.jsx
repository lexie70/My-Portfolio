import RootLayout from "./layout";
import Link from "next/link";
import "./globals.css"

export default function Home() {


  return (<>
  <section className="mobile">
    <Intro/>
    <Portfolio/>
  </section>
  </>
  )
}
 


function Intro(){
  return<>
  
      <div>
          <div className="developer">Developer</div>
      </div>
      <div className="main-cont">
        <h5 className="mb-4">Alexandra Campos</h5>
        <h1 className="col-6">Frontend Developer and web designer</h1>
        <p className="col-6 mt-4">Over the past 3 years I have been working with big eCommerce companies around the world. Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS</p>
        <Link href="/projects" className="link">view projects</Link><span className="ms-1 me-1"> or </span><Link href="/about" className="link">read about me</Link>
      </div>

  </>
}

function Portfolio(){
  return <>
      <h5 className="mb-4">selected projects</h5>
      <h1 className="mb-4">Portfolio</h1>
      <div className="d-flex row">
        <Card />
        <div className="w-4"></div>
        <Card/>
        <Card/>
        <div className="w-4"></div>
        <Card/>
      </div>
  </>
}



function Card({title,image,subtitle}){
  return<>
   <div className='card-width card mb-4'>
      <h1>{title} blabla</h1>
      {/* <img src={image} alt={title}/> */}
      <h2>{subtitle}</h2>
   </div>
  </>
}

  



  

