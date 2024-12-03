import React from 'react'
import Styles from './Testmonials.module.css'

function Testmonials() {
  return (
    <div className={Styles.testi__con}>
        <h3 className={Styles.testi__title}>Testimonials</h3>

        <div className={Styles.testi__list}>
            <div className={Styles.testi__items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora veritatis doloribus at illo eaque eos sit aspernatur totam ab?
                </p>

                <img src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                <h4>Jona Doe</h4>
                <p className={Styles.bio}>Web Developer</p>
            </div>

            <div className={Styles.testi__items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora veritatis doloribus at illo eaque eos sit aspernatur totam ab?
                </p>

                <img src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                <h4>Jane Doe</h4>
                <p className={Styles.bio}>Web Developer</p>
            </div>

            <div className={Styles.testi__items}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora veritatis doloribus at illo eaque eos sit aspernatur totam ab?
                </p>

                <img src="https://images.unsplash.com/photo-1578100044626-110806c15b00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                <h4>Joe Doe</h4>
                <p className={Styles.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testmonials