import styles from "../herosection/hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.greeting}>HELLO</h1>
            <h2 className={styles.name}>
              I M! <span>Aqsa Waqar</span>
            </h2>
            <h1 className={styles.jobTitle}>Frontend Web Designer</h1>
            <p className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br /> Debitis ipsam amet hic adipisci nam error nobis odio
              blanditiis,
              <br /> Lorem ipsum dolor sit amet.
            </p>
            <Link href="/contact">
              <button className={styles.hireMeButton}>HIRE ME</button>
            </Link>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/cv/developer.jpg"
              alt="Developer Image"
              width={400}
              height={400}
              className={styles.roundedImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
