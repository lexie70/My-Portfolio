import Image from "next/image";

export default function Projects(props) {
  return (
    <>
      <div className="project-section row">
        <div className="col-md-6">
          <div>
            <h5>Project</h5>
            <h1>{props.title}</h1>
          </div>
          <div>
            <h5>my role</h5>
            <p>
              <b>{props.role}</b>
            </p>
          </div>
          <div>
            <h5>year</h5>
            <p>
              <b>{props.year}</b>
            </p>
          </div>
        </div>
        {/* paragraph section */}
        <div className="paragraph-section col-md-6">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
          <p>{props.p5}</p>
          <p>{props.p6}</p>
          <p>{props.p7}</p>
        </div>
        {/* image section */}
        <div className="image-section">
          <Image
            src={props.image1}
            alt="Signup form"
            height={500}
            width={500}
          />
          <Image src={props.image2} alt="Login form" height={500} width={500} />
          <Image
            src={props.image3}
            alt="Order addition form"
            height={500}
            width={500}
          />
          <Image
            src={props.image4}
            alt="Plant addition form"
            height={500}
            width={500}
          />
        </div>
      </div>
    </>
  );
}
