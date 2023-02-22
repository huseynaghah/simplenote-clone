import React from 'react'
import styles from "./Signup.module.css"

export const Signup  = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>The simplest way to keep notes</h1>
        <p className={styles.p}>All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
        <div className={styles.butcontainer}>
        <a href="#" className={styles.a}><div className={styles.button} onClick="location.href='https://google.com">Sign up now</div></a></div>
    </div>
  )
}
