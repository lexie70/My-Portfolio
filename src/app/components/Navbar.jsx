"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Link from "next/link";
import logo from "../../../public/img/favicon-transparent.png";
import Image from "next/image";

export default function Navbar({ setVisible, visible }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setVisible(!visible);
  };
  return (
    <>
      <section>
        <nav className={styles.nav}>
          <div>
            <Link
              href="/"
              className={menuVisible ? "link whitelogo" : "link blacklogo "}
            >
              <Image src={logo} width={50} height={50} />
              Alexandra Campos
            </Link>
          </div>
          <div>
            <h1
              className={` ${menuVisible ? styles.nonbars : styles.bars}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              {menuVisible ? (
                <>
                  CLOSE
                  <span className="ms-1">
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </>
              ) : (
                <>
                  MENU
                  <span className="ms-1">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                </>
              )}
            </h1>
          </div>
        </nav>
        {menuVisible && <Menu />}
      </section>
    </>
  );
}

function Menu() {
  return (
    <div className={styles.menuMainDiv}>
      <div className={styles.align}>
        <h5>menu</h5>
      </div>
      <ul className={styles.ul}>
        <li>
          <a href="/portfolio">Projects</a>
        </li>
        <li>
          <a href="/about">About me</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexandra-campos-carrillo-92422a26a/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/lexie70">Github</a>
        </li>
      </ul>
    </div>
  );
}
