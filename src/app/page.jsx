import RootLayout from "./layout";
import Link from "next/link";
import "./globals.css"

export default function Home() {


  return (<>
 
 <div>
    <div className="developer">Developer</div>
</div>
<div className=" container main-cont">
  <h5 className="mb-5">Alexandra Campos</h5>
  <h1 className="col-6">Frontend Developer and web designer</h1>
  <p className="col-7 mt-4">Over the past 3 years I have been working with big eCommerce companies around the world. Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS</p>
  <Link href="/projects" className="link">view projects</Link> or <Link href="/about" className="link">read about me</Link>
</div>
  </>
  )
}

