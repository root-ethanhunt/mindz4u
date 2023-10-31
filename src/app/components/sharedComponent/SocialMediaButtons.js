'use client'

import * as React from 'react';
import Image from 'next/image'
import styles from './socialMediaIcons.module.css'

export default function Block() {
    return(
        <div className={styles.imageContainer}>
         <button> 
             <Image 
             src="/linkedin.svg"
             width={100}
             height={100}
             alt="Picture of the author"
             className={styles.image}
             />
        </button>
         <button>
             <Image 
             src="/insta.svg"
             width={100}
             height={100}
             alt="Picture of the author"
             className={styles.image}
             />
         </button>
         <button>
             <Image 
             src="/facebook_icon.svg"
             width={100}
             height={100}
             alt="Picture of the author"
             className={styles.image}
             />
         </button>
        </div>
    )
}