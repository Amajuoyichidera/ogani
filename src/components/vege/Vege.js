import React, { useState } from 'react'
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
  return (
    <div className={styles.vege}>
        <div className={styles.departCon}>
            <section onClick={() => setShowDepart(!showDepart)} className={styles.allDepart}>
                <h4>All Departments</h4>
                <section>{showDepart ? <FaAngleDown /> : <FaAngleUp />}</section>
            </section>
            {showDepart && <section className={styles.depart}>
                {department.map((item) => <h5>{item}</h5>)}
            </section>}
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
  )
}

export default Vege