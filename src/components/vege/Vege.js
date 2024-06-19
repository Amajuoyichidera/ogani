import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import Banner from '../../assets/banner.jpg';
import styles from './vege.module.css';


const Vege = () => {
    const [showDepart, setShowDepart] = useState(true);
    const department = ['Fresh Meat',
        'Vegetables',
        'Fruit & Nut Gifts',
        'Fresh Berries',
        'Ocean Foods',
        'Butter & Eggs',
        'Fastfood',
        'Fresh Onion',
        'Papayaya & Crisps',
        'Oatmeal',
        'Fresh Bananas']

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
    className="reveal-element"
  >
     <div className={styles.vege}>
        <div className={styles.departCon}>
            <section onClick={() => setShowDepart(!showDepart)} className={styles.allDepart}>
                <h4>All Departments</h4>
                <section>{showDepart ? <FaAngleDown /> : <FaAngleUp />}</section>
            </section>
             {showDepart &&<motion.section
                className={styles.depart}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showDepart ? 'auto' : 0, opacity: showDepart ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
               >
        {department.map((item, index) => (
          <h5 key={index}>{item}</h5>
        ))}
      </motion.section>}
        </div>

        <div>
            <div className={styles.allCat}>
            <section className={styles.search}>
            <section className={styles.sec1}>
                <section className={styles.down}>
                    <h4>All Categories</h4>
                    <FaAngleDown />
                </section>
                <div className={styles.line}></div>
                <input placeholder='What do you need?' />
            </section>
            <button>SEARCH</button>
            </section>

            <section className={styles.number}>
             <section className={styles.tele}><BsFillTelephoneFill /></section>
             <section>
                <h3>+65 11.188.888</h3>
                <p>support 24/7 time</p>
             </section>
            </section>
            </div>

            <div className={styles.imgCon}>
                <section className={styles.overText}>
                    <h5>FRUIT FRESH</h5>
                    <h1>Vegetable <br />
                    100% Organic</h1>
                    <p>Free Pickup and Delivery Available</p>
                    <button>Shop Now</button>
                </section>
                    <img className={styles.background} src={Banner} />
            </div>
        </div>
    </div>
  </motion.div>
  )
}

export default Vege