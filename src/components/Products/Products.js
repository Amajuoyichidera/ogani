import React from 'react'
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import styles from './products.module.css'

const MyProduct = ({text}) => {
    const item = [
        {name: 'Water Leaf', price: 30.00, image: product1 },
        {name: 'Fresh Pepper', price: 20.00, image: product2},
        {name: 'Chicken', price: 40.00, image: product3}
    ]
    return (
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