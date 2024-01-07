import Image from 'next/image'
import style from './footer.module.css'

export default function Footer() {
  return (
      <div className={style.block}>
      <div className={style.watermark}>© 2023 Mindz4U. All Rights Reserved.</div>
    </div>
  )
}
