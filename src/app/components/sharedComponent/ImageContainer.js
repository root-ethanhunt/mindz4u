"use client";

import * as React from "react";
import Image from "next/image";
import styles from "./block.module.css";

export default function Block() {
  return (
    <div >
      <Image
          src="/main_image.png"
          width={700}
          height={700}
          objectFit="contain"
          alt="Picture of the author"
          className={styles.sideImg}
          // style={{width:'60%', height: '60%'}}
        />
    </div>
  );
}
