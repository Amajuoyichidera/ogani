import React,{ useState } from 'react'
import apple from '../../assets/apple.jpg'
import banana from '../../assets/banana.jpg'
import berry from '../../assets/berry.jpg'
import burger from '../../assets/burger.jpg'
import guava from '../../assets/guava.jpg'
import mango from '../../assets/mango.jpg'
import meat from '../../assets/meat.jpg'
import waterMelon from '../../assets/waterMelon.jpg'
import styles from './Featured.module.css'

const images = [
    { src: apple, category: 'Fruit', name: 'Apple', price: 30.00 },
    { src: banana, category: 'Fruit', name: 'Banana', price: 40.00 },
    { src: berry, category: 'Fruit', name: 'Berry', price: 20.00},
    { src: burger, category: 'Fast Food', name: 'Burger', price: 35.00 },
    { src: guava, category: 'Vegetable', name: 'Guava', price: 15.00 },
    { src: mango, category: 'Fruit', name: 'Mango', price: 10.00 },
    { src: meat, category: 'Fresh Meat', name: 'Red Meat', price: 50.00 },
    { src: waterMelon, category: 'Vegetable', name: 'WaterMelon', price: 40.00 },
  ];

  const categories = ['All', 'Fruit', 'Fresh Meat', 'Vegetable', 'Fast Food']; 

const Featured = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className={styles.galleryContainer}>
    <div className={styles.buttonsContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
    <div className={styles.imagesContainer}>
      {filteredImages.map((image, index) => (
        <div className={styles.imageCard} key={index}>
          <img src={image.src} alt={image.name} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Featured