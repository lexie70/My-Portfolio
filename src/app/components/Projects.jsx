import Image from "next/image";
import image from "../../../public/img/flor.jpg";

export default function Projects(props) {
  return (
    <>
      <div className="project-section">
        <div>
          <h5>case study</h5>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h5>my role</h5>
          <p>
            <b>{props.role}</b>
          </p>
        </div>
        <div>
          <h5>client</h5>
          <p>
            <b>{props.client}</b>
          </p>
        </div>
        <div>
          <h5>year</h5>
          <p>
            <b>{props.year}</b>
          </p>
        </div>
        {/* paragraph section */}
        <div className="paragraph-section">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
        </div>
        {/* image section */}
        <div className="image-section">
          <Image src={image} height={500} width={500} className="" />
          <Image src={image} height={500} width={500} className="" />
          <Image src={image} height={500} width={500} className="" />
          <Image src={image} height={500} width={500} className="" />
        </div>
      </div>
    </>
  );
}
