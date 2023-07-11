import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NextProject({ name, description, link }) {
  return (
    <>
      <div className="center-needadeveloper-text">
        <div className="centering">
          <h5>see also</h5>
          <h1 className="text">
            <Link href={`/project/${link}`}>
              Next Project{" "}
              <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
            </Link>
          </h1>
          <p>
            <b>
              {name} <FontAwesomeIcon icon={faMinus} />
            </b>
            {description}
          </p>
        </div>
        <hr className="horizon-top" />
      </div>
    </>
  );
}
