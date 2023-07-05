import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Link from "next/link";
import logo from "../../../public/img/favicon-transparent.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className={styles.nav}>
          <div className="">
            <Link href="/" className="link logo">
              <Image src={logo} width={50} height={50} />
              Alexandra Campos
            </Link>
          </div>
          <div>
            <h1 className={styles.bars}>
              MENU
              <span className="ms-1">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </h1>
          </div>
        </nav>
      </section>
    </>
  );
}
