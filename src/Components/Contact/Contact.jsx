import React from 'react'
import Styles from './Contact.module.css'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className={Styles.contact__wrapper}>
        <div className={Styles.contact__con}>
            <div className={Styles.contact__info}>
                <h3>Get in touch</h3>
                <p className={Styles.contact__desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et hic non consequatur natus? Distinctio?
                </p>
                <p className={Styles.contact__address}>
                    123 Main Street <br />
                    BangKok, Thailand
                </p>

                <p><FaPhoneAlt /> (+66) 98 456 024</p>
                <p><FaEnvelope /> patamankham@gmail.com</p>
            </div>

            <div className={Styles.contact__form}>
                <form action="">
                    <div className={Styles.input__group}>
                        <div>
                            <label htmlFor="first Name">First Name</label>
                            <input type="text" placeholder='eg. Phat'/>
                        </div>
                        <div>
                            <label htmlFor="last Name">Last Name</label>
                            <input type="text" placeholder='eg. Kham'/>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. patamankham@gmail.com' />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}


export default Contact