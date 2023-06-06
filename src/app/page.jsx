import Image from 'next/image'
import Link from "next/link";
import "./globals.css"
import flores from "../../public/img/flores2.jpg"

export default function Home() {


  return (<>
  <section className="mobile">
    <Intro/>
    <Portfolio/>
    <h2 className='mt-5'>Haha</h2>
  </section>
  </>
  )
}
 


function Intro(){
  return<>
  <section className='viewport-screen-100'>
      <div>
          <div className="developer">Developer</div>
      </div>
      <div className="main-cont">
        <h5 className="mb-4">Alexandra Campos</h5>
        <h1 className="col-6">Frontend Developer and web designer</h1>
        <p className="col-6 mt-4">Over the past 3 years I have been working with big eCommerce companies around the world. Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS</p>
        <Link href="/projects">view projects</Link><span className="ms-1 me-1"> or </span><Link href="/about">read about me</Link>
      </div>

  </section>

  </>
}

function Portfolio(){
  return <div>
  
      <h5 className="mb-4">selected projects</h5>
      <h1 className="mb-4">Portfolio</h1>
      <div className="card-project-container">
        <Card title={"hola soy titulo"} subtitle={"blebleble"} image={flores}/>
        <Card/>
        <Card/>
        <Card/>
      </div>
  </div>

  
}



function Card({title,image,subtitle}){
  return<>
   <div className='card-componet'>
      <h1>{title}</h1>
      <div className=''>
          <Image
          src={flores}
          alt="Picture of the author"
          // style={{}}
        />
      </div>
      <h2>{subtitle}</h2>
   </div>
  </>
}

  



  

