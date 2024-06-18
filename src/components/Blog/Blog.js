import React from 'react'
import MyH1 from '../myH1/MyH1'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'
import { FaCalendar, FaComment } from 'react-icons/fa6'
import styles from './Blog.module.css';

const MyBlog = (props) => {
    return (
        <div>
            <img className={styles.img} src={props.image} />
            <div className={styles.date}>
                <div className={styles.calender}>
                    <FaCalendar />
                    <p> May 4,2019</p>
                </div>

                <div className={styles.calender}>
                    <FaComment />
                    <p>5</p>
                </div>
            </div>
            <h3>{props.text}</h3>
            <p>Sed quia non numquam modi tempora indunt ut <br /> labore et dolore magnam aliquam quaerat</p>
        </div>
    )
}


const Blog = () => {
  return (
    <div>
        <MyH1 text='From The Blog' />

        <div className={styles.container}>
            <MyBlog image={blog1} text='Cooking tips make cooking simple' />
            <MyBlog image={blog2} text='6 ways to prepare breakfast for 30' />
            <MyBlog image={blog3} text='Visit the clean farm in the US' />
        </div>
    </div>
  )
}

export default Blog