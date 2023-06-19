import Link from "next/link"
import Image from "next/image"
import flores from "../../../public/img/flores.jpg"
import Carousel from "../components/Carousel"

export default function About() {
  return (<>
  <div className="mobile large-screen mainBox-about">
    <h5 className="mb-4">A FEW WORDS ABOUT ME</h5>
    <h1>I'm Alexandra Campos, a multidisciplinary developer who focuses on telling my clients’ stories visually, through enjoyable
       and meaningful experiences. I specialize in responsive websites and functional user interfaces.</h1>
    <h3 className="mt-5 h3class-about">Over the past 3 years I have been working with eCommerce companies around the world and have been offering services around them,
       maintaining eCommerce websites and developing SAAS.
     In my spare time I enjoy exercising and playing videogames.</h3>
  </div>
  <Carousel/>
  </>
  )
}

