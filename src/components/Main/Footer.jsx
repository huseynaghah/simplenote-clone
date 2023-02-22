import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (<>
    <footer className={styles.foot}>
      <div className={styles.left}>
        <a href="/contact" className={styles.a}>Contact Us</a>
        <a href="/help" className={styles.a}>Help</a>
        <a href="/blog" className={styles.a}>Blog</a>
        <a href="/contact" className={styles.a}>Developers</a>
        <a href="/contact" className={styles.a}>Terms & Conditions</a>
        <a href="/contact" className={styles.a}>Privacy</a>
        <a href="/contact" className={styles.a}>Press</a>
        <a href="/contact" className={styles.a}>Privacy Notice for California Users</a>
      </div>
      <div className={styles.right}>© Automatic</div>
    </footer>
  </>
  )
}
