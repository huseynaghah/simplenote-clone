import React from 'react'
import styles from "./Contact.module.css"


export const ContactComponent = () => {
    return (
        <> 
        <div style={{height:56}}></div>
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <p className={styles.p}>Need help with Simplenote?  Check out our <a href="/help" className={styles.other}>Help</a>  page for frequently asked questions.  If you can’t find an answer there, email us at <a href="mailto:support@simplenote.com" className={styles.other}>support@simplenote.com</a> and one of our Happiness Engineers will be in touch.

            </p>
        </div>
        </>

    )
}
