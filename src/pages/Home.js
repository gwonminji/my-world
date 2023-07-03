// import { useRef } from "react";

// import { motion, useScroll, useMotionValueEvent, useTransform, useMotionTemplate } from "framer-motion"

import Section1 from '@components/home/Section1';
import Section2 from '@components/home/Section2';
import Section3 from '@components/home/Section3';
import Section4 from '@components/home/Section4';
import Section5 from '@components/home/Section5';

import styles from "@styles/pages/home.module.scss";

export default function Home(){

    return(
        <main className={styles.main}>
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    <Section1 />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    {/* <motion.div
                        style={{ scale }}
                    >section2
                    </motion.div> */}
                    <Section2 />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section3}`}>
                <div className="inner">
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >section3
                    </motion.div> */}
                    <Section3 />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section4}`}>
                {/* <div className="inner">
                    <Section4 />                    
                </div> */}
                <Section4 />
            </section>
            <section className={`${styles.section} ${styles.section5}`}>
                <div className="inner">
                    <Section5 />                    
                </div>
            </section>
        </main>
    )
}