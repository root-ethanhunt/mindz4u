
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Grids from "./components/sharedComponent/Block.js"
export default function Home() {
  return (
    <main className={styles.main}>
       {/* <p>hey</p> */}
       <Grids/>
    </main>
  )
}
