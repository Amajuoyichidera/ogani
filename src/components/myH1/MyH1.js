import React from 'react'
import styles from './MyH1.module.css'

const MyH1 = ({text}) => {
  return (
    <div>
        <h1 className={styles.myH1}>{text}</h1>
        <div className={styles.line}></div>
    </div>
  )
}

export default MyH1