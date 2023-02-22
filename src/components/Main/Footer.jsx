import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {

  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

  const lightTheme = {
    color: "#2c3338"
  }

  const darkTheme = {
    color: "#fff"
  }

  return (<>
    <footer className={styles.foot}>
      <div className={styles.left}>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme} >Contact Us</a>
        <a href="/help" className={styles.a} style={isDark ? darkTheme : lightTheme}>Help</a>
        <a href="/blog" className={styles.a} style={isDark ? darkTheme : lightTheme}>Blog</a>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme}>Developers</a>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme}>Terms & Conditions</a>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme}>Privacy</a>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme}>Press</a>
        <a href="/contact" className={styles.a} style={isDark ? darkTheme : lightTheme}>Privacy Notice for California Users</a>
      </div>
      <div className={styles.right}>© Automatic</div>
    </footer>
  </>
  )
}
