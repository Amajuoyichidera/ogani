import React, { useRef } from 'react'
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import styles from './products.module.css';
import { useInView, motion  } from "framer-motion";

const MyProduct = ({text}) => {
    const item = [
        {name: 'Water Leaf', price: 30.00, image: product1 },
        {name: 'Fresh Pepper', price: 20.00, image: product2},
        {name: 'Chicken', price: 40.00, image: product3}
    ]

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
        <div>
            <h2 className={styles.head}>{text}</h2>

            <div>
                {item.map((goods) => (
                    <div className={styles.card}>
                        <img alt={goods.name} src={goods.image} />
                        <div>
                            <p>{goods.name}</p>
                            <h5>${goods.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </motion.div>
    )
}
const Products = () => {
  return (
    <div className={styles.container}>
        <MyProduct text='Latest Products' />
        <MyProduct text='Top Rated Products' />
        <MyProduct text='Review Products' />
    </div>
  )
}

export default Products