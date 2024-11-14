

import styles from "../navbar/navbar.module.css"
import Link from "next/link"

export default function Nav(){
return(<>  <nav className={styles.nav}>
    <h1 className={styles.title}>MY PORTFOLIO</h1>
    <ul className={styles.menu}>
   <Link href="">  <li className={styles.menuItem}>HOME</li></Link>
   <Link href="">  <li className={styles.aboutItem}>ABOUT</li></Link>
   <Link href=""> <li className={styles.aboutItem}>SKILLS</li></Link>
   <Link href="">   <li className={styles.aboutItem}>CONTACT</li></Link>
   <Link href="">   <li className={styles.aboutItem}>PROJECTS</li></Link>
    </ul>
    <Link href="../cv/ourcv.pdf">
      <button className={styles.button}>CV</button>
    </Link>
  </nav></>)
}