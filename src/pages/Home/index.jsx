import React from 'react'
import { Devices } from '../../components/Home/Devices';
import { Download } from '../../components/Home/Download';
import { Feedback } from '../../components/Home/Feedback';
import { Signup } from '../../components/Home/Signup'
import { Surface } from '../../components/Home/Surface';
import  styles  from "./index.module.css";

export const Home = () => {
  return (<>
    <div className={styles.container}>
      <Signup/>
      <div style={{height:56}}></div>
      <Devices/>
      <div style={{height:56}}></div>
      <Surface/>
      <div style={{height:56}}></div>
      <Feedback/>
      <div style={{height:56}}></div>
      <Download/>

    </div>
    </>
  )
}
