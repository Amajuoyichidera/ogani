import React, { useRef } from 'react'
import Logo from '../../assets/logo.png';
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.css'
import { useInView, motion  } from "framer-motion";

const MyIcon = (props) => {
    return (
        <section className={styles.icon}>
            {props.icon}
        </section>
    )
}

const Footer = () => {
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
    <footer>
        <div>
            <img className={styles.logo} src={Logo} alt='logo' />
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p>Email: amajuoyichideradavid@gmail.com</p>
        </div>

        <div>
            <h3>Useful Links</h3>
            <p>About Us</p>
            <p>About Our Shop</p>
            <p>Secure Shopping</p>
            <p>Delivery infomation</p>
            <p>Privacy Policy</p>
            <p>Our Sitemap</p>
        </div>

        <div>
            <p>Who We Are</p>
            <p>Our Services</p>
            <p>Projects</p>
            <p>Contact</p>
            <p>Innovation</p>
            <p>Testimonials</p>
        </div>

        <div>
            <h3>Join Our Newsletter Now</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>

            <section className={styles.placeholder}>
                <input placeholder='Enter Your Email' />
                <button>SUBSCRIBE</button>
            </section>

            <section className={styles.icons}>
                <MyIcon icon={<FaFacebookF />} />
                <MyIcon icon={ <FaXTwitter />} />
                <MyIcon icon={ <FaInstagram />} />
                <MyIcon icon={ <FaPinterest />} />
            </section>
        </div>
    </footer>
    </motion.div>
  )
}

export default Footer