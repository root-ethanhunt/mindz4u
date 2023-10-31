"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./block.module.css";
import IconSection from "./SocialMediaButtons";

export default function Block() {
  return (
    <div className={styles.mainContentBox}>
      <div className={styles.mainColumnContentText}>
        <div className={styles.textContent}>
          <h1>
            Welcome to <span className={styles.spanText}>Mindz4U</span>
          </h1>
          <h3>Your Digital Marketing Partner</h3>
        </div>
        <div className={styles.mainButtonContainer}>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>Services</button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button2}>Contact Us</button>
          </div>
        </div>
        <div>
          <IconSection />
        </div>
      </div>
      <div className={styles.mainColumnContentImage}>
        <Image
          src="/main_image.png"
          width={650}
          height={650}
          objectFit="contain"
          alt="Picture of the author"
          // style={{width:'60%', height: '60%'}}
        />
      </div>
    </div>
  );
}
