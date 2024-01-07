import Link from 'next/link'
// import styles from "./block.module.css";
import styles from "./notfound.module.css";
 
export default function NotFound() {
  return (
    <div>
       <section className={styles.section}>
      <div className={styles.section__image}>
        <img className={styles.image__img} src="https://i.postimg.cc/8Pwq7YjY/Scarecrow.png" alt="404 Not Found Image" />
      </div>

      <div className={styles.section__text}>
        <h1 className={styles.text__h1}>I Have Bad News For You</h1>
        <p className={styles.text__p}>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button className={styles.text__btn} type="button">Back to homepage</button>
      </div>
    </section>

    </div>
  )
}