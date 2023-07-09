import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NextProject({ name, description }) {
  return (
    <>
      <div>
        <hr className="mb-5" />
        <h5>see also</h5>
        <h1>
          <Link href={"/project/star-wars"}>
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
        <hr className="mt-5" />
      </div>
    </>
  );
}
