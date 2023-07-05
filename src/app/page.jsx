import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import flores from "../../public/img/flores2.jpg";
import NeedADeveloper from "./components/NeedADeveloper";

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
            Since 2019 I have been working in various projects, some of them
            involving big eCommerce companies. Had the opportunity to be part of
            small teams and developed various responsive websites and SPAs and
            even had the chance to take part in a SAAS Project
          </p>
          <Link href="/#portfolio">view projects</Link>
          <span className="ms-1 me-1"> or </span>
          <Link href="/about">read about me</Link>
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
          <Card title={"Project Name #1"} subtitle={"Project Description #1"} />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card title={"Project Name #2"} subtitle={"Project Description #2"} />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card title={"Project Name #3"} subtitle={"Project Description #3"} />
        </div>
        <div className="col-sm-12 col-md-5 mb-4">
          <Card title={"Project Name #4"} subtitle={"Project Description #4"} />
        </div>
      </div>
    </div>
  );
}

function Card({ title, subtitle }) {
  return (
    <>
      <div className="card-componet">
        <h5 className="mt-5 ms-5">{title}</h5>
        <div className="">
          <Image src={flores} alt="Picture of the author" />
        </div>
        <h2 className="ms-5 card-h2">{subtitle}</h2>
      </div>
    </>
  );
}
