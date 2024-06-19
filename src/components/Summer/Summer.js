import React, { useRef } from 'react'
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import styles from './Summer.module.css';
import { useInView, motion  } from "framer-motion";


const Summer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
    <div className={styles.summer}>
        <img alt='banner1' src={banner1} />
        <img alt='banner2' src={banner2} />
    </div>
    </motion.div>
  )
}

export default Summer