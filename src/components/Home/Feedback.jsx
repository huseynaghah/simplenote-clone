import React from 'react'
import styles from "./Feedback.module.css"

export const Feedback = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>What people are saying</h1>
            </div>
            <div style={{ height: 32 }}></div>

            <div className={styles.flexcont}>
                <div className={styles.rows}>
                    <div className={styles.card}>
                        <h5 className={styles.h5}>If you’re not using Simplenote, you’re missing out.</h5>
                        <p className={styles.p}>TechCrunch</p>
                    </div>
                    <div className={styles.card}>
                        <h5 className={styles.h5}>If you’re looking for a cross-platform note-taking tool with just enough frills, it’s hard to look beyond Simplenote.</h5>
                        <p className={styles.p}>
                            MacWorld
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h5 className={styles.h5}>If you want a truly distraction-free environment then you can’t do better than Simplenote for your note-taking needs.</h5>
                        <p className={styles.p}>Zapier</p>
                    </div>
                </div>
            </div>
        </>
    )
}
