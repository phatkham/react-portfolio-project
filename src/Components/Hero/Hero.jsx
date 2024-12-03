import React from 'react'
import styles from './hero.module.css'
import { FaGithub , FaLinkedin , FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import { Tilt } from 'react-tilt'


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero__info}>
                    <p className={styles.text_1}>Hi, it's me</p>
                    <h3 className={styles.text_2}>Phat Kham</h3>
                    <p className={styles.text_3}>
                        I'm a 
                        <TypeAnimation
                            sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front and Developer',
                                    4000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    5000,
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '32px', display: 'inline-block' ,marginLeft: '20px'}}
                            repeat={Infinity}
                        />
                    </p>
                    <p className={styles.text_4}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente mollitia <br /> corporis delectus facere! Perspiciatis, eligendi?
                    </p>

                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>
                    </ul>
                </div>

                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.hero__img}></div>
                </Tilt>

            </div>
        </div>
    </div>
  )
}

export default Hero