"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Alexandra's Portfolio</title>
        <link
          precedence="default"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link
          precedence="default"
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          precedence="default"
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300&family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          as="script"
          crossOrigin="anonymous"
        />
      </head>
      <body className={visibleMenu == true ? "active-menu" : "nonactive-menu"}>
        <Navbar setVisible={setVisibleMenu} visible={visibleMenu} />
        <section className="large-screen">
          <div>{children}</div>
          <Footer />
        </section>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        ></script>
        {/* Abajo estan los scripts de ionic */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          crossOrigin="anonymous"
        ></script>

        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
