import React from 'react'
import styles from './Services.module.css'
import { FaLaptopCode , FaMarker ,FaDesktop  } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services__con}>
        <h2 className={styles.services__title}>Services</h2>
        <div className={styles.services__list}>
            <div className={styles.services__items}>
                <FaLaptopCode /> 
                <h4>Web Development</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam, hic sint quasi omnis eaque?
                </p>
            </div>

            <div className={styles.services__items}>
                <FaMarker /> 
                <h4>Web Desgin</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam, hic sint quasi omnis eaque?
                </p>
            </div>

            <div className={styles.services__items}>
                <FaDesktop /> 
                <h4>Front-end Consulting</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam, hic sint quasi omnis eaque?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services