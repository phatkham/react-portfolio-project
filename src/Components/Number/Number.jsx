import React from 'react'
import Style from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { useInView } from 'react-intersection-observer';

function Number() {

    const { ref, inView } = useInView({
        threshold: 0.2, // สัดส่วนที่มองเห็นก่อนจะถือว่า visible
    });
  return (
    <div className={Style.Number__con}>
        <div className={Style.Number__items}>
            <h3 ref={ref} className={Style.h3}>
                {inView ? <CountUp start={102} end={300} duration={130} className={Style.CountUp}/> : null}+
            </h3>
            <p>Project Delivered</p>
        </div>

        <div className={Style.Number__items}>
            <h3 ref={ref} className={Style.h3}>
                {inView ? <CountUp start={0} end={150} duration={20} className={Style.CountUp}/> : null}+
            </h3>
            <p>Companies Helpal</p>
        </div>

        <div className={Style.Number__items}>
            <h3 ref={ref} className={Style.h3}>
                {inView ? <CountUp start={1} end={50} duration={5}  className={Style.CountUp}/> : null}+
            </h3>
            <p>Yoars of experience</p>
        </div>

        <div className={Style.Number__items}>
            <h3 ref={ref} className={Style.h3}>
                {inView ? <CountUp start={0} end={400} duration={100} className={Style.CountUp}/> : null}+
            </h3>
            <p>Happy Clients</p>
        </div>
    </div>
  )
}

export default Number