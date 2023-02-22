import React from 'react'
import styles from "./Download.module.css"
import apple from "../../assets/ic-app-store-mac.png"
import playstore from "../../assets/ic-play-store.png"
import linux from "../../assets/ic-linux.png"
import windows from "../../assets/ic-windows.png"

export const Download = () => {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.h1}>Available on all your devices</h1>
            <p className={styles.p}>Download Simplenote for any device and stay in sync – all the time, everywhere.</p>
        </div>
        <div className={styles.downcontainer}>
            <div className={styles.left}>
                <a href="" className={styles.a}>
                    <div className={styles.button}>
                        <img className={styles.image} src={apple}></img>
                    <div>
                    <b className={styles.badges}>Download on the</b>
                    App Store
                    </div>
                </div>
                </a>
                <a href="" className={styles.a}>
                    <div className={styles.button}>
                        <img className={styles.image} src={playstore}></img>
                    <div>
                    <b className={styles.badges}>Download on the</b>
                    Play Store
                    </div>
                </div>
                </a>
                <a href="" className={styles.a}>
                    <div className={styles.button}>
                        <img className={styles.image} src={linux}></img>
                    <div>
                    <b className={styles.badges}>Download for</b>
                    Linux
                    </div>
                </div>
                </a>
            </div>
            <div className={styles.right}>
                <a href="" className={styles.a}>
                <div className={styles.button}>
                    <img className={styles.image} src={apple}></img>
                    <div>
                    <b className={styles.badges}>Download on the</b>
                    Mac App Store
                    </div>
                </div>
                </a>
                <a href=""  className={styles.a}>
                <div className={styles.button}>
                    <img className={styles.image} src={windows}></img>
                    <div>
                    <b className={styles.badges}>Download on the</b>
                    Windows Store
                    </div>
                </div>
                </a>
            </div>
           
        </div>
        <a className={styles.other} href="#">Other downloads</a>
        
    </>
    )
}
