import React from 'react'
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import styles from './Summer.module.css';


const Summer = () => {
  return (
    <div className={styles.summer}>
        <img src={banner1} />
        <img src={banner2} />
    </div>
  )
}

export default Summer