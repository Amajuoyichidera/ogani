import React, { useState, useEffect } from 'react'
import styles from './SlideShow.module.css'
import orange from '../../assets/orange.jpg'
import dried from '../../assets/dried.jpg'
import drink from '../../assets/drink.jpg'
import meat from '../../assets/meat.jpg'
import vegetables from '../../assets/vegetables.jpg'

const images = [
    { src: orange, text: 'FRESH FRUIT' },
    { src: dried, text: 'DRIED FRUIT'},
    { src: drink, text: 'DRINK FRUIT'},
    { src: meat, text: 'RED MEAT'},
    { src: vegetables, text: 'VEGETABLES'}
]


const SlideShow = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <div className={styles.slideshow} style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }}>
        {images.concat(images.slice(0, 3)).map((image, index) => (
          <div className={styles.slide} key={index}>
            <img src={image.src} alt={`Slide ${index}`} />
            <div className={styles.overlayText}>{image.text}</div>
          </div>
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>❯</button>
    </div>

  )
}

export default SlideShow