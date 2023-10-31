"use client";

import { useState, useEffect } from "react";
// import Link from "next/Link";
import Link from "next/link"
import Image from "next/image";
import style from "./navbar.module.css";
import dynamic from "next/dynamic";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    console.log("hii", showNavbar);
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          {/* <Logo /> */}
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className={style.menu_icon} onClick={handleShowNavbar}>
          <Image
            src="/menu.png"
            width={70}
            height={70}
            alt="Picture of the author"
          />
          {/* <button onClick={()=>setShowNavbar(showNavbar=>!showNavbar)}>hiii</button>
       <button onClick={() => setShowNavbar((value) => !value)}>CLICK ME!</button> */}
        </div>
        <div className={`${style.nav_elements}  ${showNavbar && style.active}`}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/pricing">PRICING</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
