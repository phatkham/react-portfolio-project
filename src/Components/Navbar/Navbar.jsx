import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { HiBars3 } from "react-icons/hi2";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled) // false + false = ture // ! เครื่องตกใจ มันจะเเปลว่า (ไม่)
  }
  return (
    <nav>
        <div className={styles.container}>
            <div className={styles.nav_com}>
              <div className={styles.logo}>
                    <a href="#">Phat Kham</a>
                </div>  

                <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className={styles.button}>
                    <a href="#">Hire Me</a>
                </div>
            </div>

            {/* Mobile Menu */}
            <HiBars3 className={styles.bars} onClick={handleToggle} />
            {isToggled ? (
              <>
                <ul className={styles.modile_menu}>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.mobile_btton}>
                  <a href="#">Hire Me</a>
                </div>
              </>
            ) : null}
        </div>
    </nav>
  )
}

export default Navbar