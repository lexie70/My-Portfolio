"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import starwars1 from "../../public/img/swstarwars1.png";
import menu from "../../public/img/lizmenu.png";
import landing from "../../public/img/tacos.png";
import NeedADeveloper from "./components/NeedADeveloper";
import mainpage from "../../public/img/mainpage.jpg";

export default function Home() {
  return (
    <>
      <section className="mobile">
        <Intro />
        <Portfolio />
        <NeedADeveloper />
      </section>
    </>
  );
}

function Intro() {
  let handleClick = () => {
    // Find the element you want to scroll to
    const element = document.querySelector("#portfolio");

    // Scroll to the element
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="viewport-screen-100">
        <div>
          <div className="developer">Developer</div>
        </div>
        <div className="main-cont">
          <h5 className="mb-4">Alexandra Campos</h5>
          <h1 className="col-6">Frontend Developer and web designer</h1>
          <p className="col-6 mt-4">
          Since 2022, I've been deeply immersed in diverse projects, with a particular focus on prominent eCommerce companies. I've actively contributed to small, dynamic teams, showcasing my expertise in crafting responsive websites and Single Page Applications (SPAs). I have extended my skills to encompass Azure DevOps, seamlessly integrating microservices into cloud-based architectures. Moreover, I've been an integral part of projects that leverage the power of the cloud for enhanced scalability and performance. This experience has provided me with a robust understanding of orchestrating microservices and optimizing development pipelines through Azure DevOps. Looking forward to bringing this wealth of knowledge and hands-on experience to future endeavors
          </p>
          <div className="read-view">
            <Link href="/about">read about me</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Portfolio() {
  return (
    <div id="portfolio">
      <h5 className="mb-4">selected projects</h5>
      <h1 className="mb-4">Portfolio</h1>
      <div className="card-project-container container row">
        <div className="col-sm-12 col-md-5 mb-4">
          <Card link={"liz-shoes"} title={"liz shoes"} image={menu} />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card link={"star-wars"} title={"star wars"} image={starwars1} />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card
            link={"liz-shoes-landing"}
            title={"liz shoes landing"}
            image={landing}
          />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card
            link={"twitter-clone"}
            title={"twitter clone"}
            image={mainpage}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ link, title, subtitle, image }) {
  return (
    <Link href={`/project/${link}`}>
      <div className="card-component">
        <h5 className="mt-5 ms-5">{title}</h5>
        <div className="">
          <Image
            src={image}
            alt="Picture of the author"
            height={1000}
            width={1000}
          />
        </div>
        <h2 className="ms-5 card-h2">{subtitle}</h2>
      </div>
    </Link>
  );
}
