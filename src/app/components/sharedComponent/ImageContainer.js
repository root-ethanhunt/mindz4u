"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./block.module.css";

export default function Block() {
  return (
    <div className="img-container">
      <Image
          src="/main_image.png"
          width={700}
          height={700}
          // layout="intrinsic"
          objectFit="contain"
          alt="Picture of the author"
          className={styles.sideImg}
          // style={{width:'60%', height: '60%'}}
        />
    </div>
  );
}
