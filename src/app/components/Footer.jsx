import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import style from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={`${style.mainbox} row mobile large-screen`}>
      <div className="col-sm-6 col-md-12 col-lg-4">
        <ContactInformation
          text={
            "Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away."
          }
          email={"E : alexandracampos658@gmail.com"}
          phone={"P: +506 62619656"}
        />
      </div>
      <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
        <LatestProjects
          firstProj={"Liz Shoes"}
          secondProj={"Star Wars"}
          thirdProj={"eCom Landing Page"}
          fourthProj={"Twitter Clone"}
        />
      </div>
      <div className="col-sm-6 col-md-3 col-lg-2">
        <CurrentAvailability
          text={
            "Immediate availability for work. I am delighted to discuss new opportunities"
          }
        />
      </div>
      <div className="col-sm-6  col-md-3 col-lg-2 offset-lg-1">
        <FollowMe github={"Github"} linkedin={"LinkedIn"} />
      </div>
    </div>
  );
}

function ContactInformation({ text, email, phone }) {
  return (
    <div>
      <h3 className={style.h3}>
        Contact <br className="d-none d-md-inline" />
        Information
        <span className="ms-1">
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </h3>
      <p>{text}</p>
      <p>
        {email}
        <br />
        {phone}
      </p>
    </div>
  );
}

function LatestProjects({ firstProj, secondProj, thirdProj, fourthProj }) {
  return (
    <div>
      <h3 className={style.h3}>
        Latest <br className="d-none d-md-inline" />
        Projects
        <span className="ms-1">
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </h3>
      <div className="read-view">
        <Link href={"/project/liz-shoes"}>
          <li className={style.li}>{firstProj}</li>
        </Link>
        <Link href={"/project/star-wars"}>
          <li className={style.li}>{secondProj}</li>
        </Link>
        <Link href={"/project/liz-shoes-landing"}>
          <li className={style.li}>{thirdProj}</li>
        </Link>
        <Link href={"/project/twitter-clone"}>
          <li className={style.li}>{fourthProj}</li>
        </Link>
      </div>
    </div>
  );
}

function CurrentAvailability({ text }) {
  return (
    <div>
      <h3 className={style.h3}>
        Current <br className="d-none d-md-inline" />
        Availability
        <span className="ms-1">
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </h3>
      <p>{text}</p>
    </div>
  );
}

function FollowMe({ github, linkedin }) {
  return (
    <div>
      <h3 className={style.h3}>
        Follow <br className="d-none d-md-inline" />
        Me On
        <span className="ms-1">
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </h3>
      <div className="read-view">
        <Link href={"https://github.com/lexie70"}>
          <li className={style.li}>{github}</li>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/alexandra-campos-carrillo-92422a26a/"
          }
        >
          <li className={style.li}>{linkedin}</li>
        </Link>
      </div>
    </div>
  );
}
