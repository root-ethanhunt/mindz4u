import Image from 'next/image'
import style from './footer.module.css'

export default function Footer() {
  return (
      <div className={style.block}>
      {/* <Image
        alt="Footer"
        // Importing an image will
        // automatically set the width and height
        src="/Footer.svg"
        sizes="100vw"
         width={100}
         height={10}
        // Make the image display full width
        style={{
          width: '100%',
          height: '10%',
        }}
      /> */}
      {/* <div className = {style.wave}></div>
      <div className = {style.wave}></div>
      <div className = {style.wave}></div>
      <div className = {style.wave}><p className = {style.watermark}>hiiiiiiii</p></div> */}
      <div className={style.watermark}>© 2023 Mindz4U. All Rights Reserved.</div>
    </div>
  )
}
