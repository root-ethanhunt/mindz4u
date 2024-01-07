"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./block.module.css";
import IconSection from "./SocialMediaButtons";
import ImageContainer from "./ImageContainer";

export default function Block() {
  return (
    <div className={styles.mainContentBox}>
      {/* <div className={styles.mainColumnContentText}> */}
      <div className={styles.mainTextContent}>
        <div className={styles.textContent}>
          <h1>
            Welcome to <span className={styles.spanText}>Mindz4U</span>
          </h1>
          <h3>Your Digital Marketing Partner</h3>
        </div>
        <div className={styles.mobileView}>
          <div className={styles.mainColumnContentImage}>
            <ImageContainer />
          </div>
        </div>

        <div className={styles.mainButtonContainer}>
          <button className={styles.button1}>Services</button>
          <button className={styles.button2}>Contact Us</button>
        </div>
        <IconSection />
      </div>
      <div className={styles.desktopView}>
      <div className={styles.mainColumnContentImage}>
        <ImageContainer/>
      </div>
      </div>

      {/* </div> */}
    </div>
  );
}
