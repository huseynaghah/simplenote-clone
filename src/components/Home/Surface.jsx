import React from 'react'
import styles from "./Surface.module.css"
import cloud from "../../assets/ic_cloud-sync.png"
import collab from "../../assets/ic_collaborate.png"
import tags from "../../assets/ic_tags.png"
import history from "../../assets/ic_history.png"
import notes from "../../assets/ic_notes.png"
import info from "../../assets/ic_info.png"


export const Surface = () => {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.h1}>Comprehensive underneath, simple on the surface</h1>
        </div>
        <div style={{height:32}}></div>
        <div className={styles.flexcont}>
            <div className={styles.rows}>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={cloud} className={styles.image} /><h5 className={styles.h5}>Use it everywhere</h5>
                    </div>
                    <p className={styles.p}>Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={tags} className={styles.image} /><h5 className={styles.h5}>Stay organized</h5>
                    </div>
                    <p className={styles.p}>Add tags to find notes quickly with instant searching.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={collab} className={styles.image} /><h5 className={styles.h5}>Work together</h5>
                    </div>
                    <p className={styles.p}>Share a to-do list, post some instructions, or publish your notes online.</p>
                </div>
            </div>
            <div className={styles.rows}>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={history} className={styles.image} /><h5 className={styles.h5}>Go back in time</h5>
                    </div>
                    <p className={styles.p}>Notes are backed up with every change, so you can see what you noted last week or last month.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={notes} className={styles.image} /><h5 className={styles.h5}>Markdown support</h5>
                    </div>
                    <p className={styles.p}>Write, preview, and publish your notes in Markdown format.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <img src={info} className={styles.image} /><h5 className={styles.h5}>It's free</h5>
                    </div>
                    <p className={styles.p}>Apps, backups, syncing, sharing – it’s all completely free.</p>
                </div>
            </div>
        </div>
    </>



    )
}
