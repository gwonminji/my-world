// import { useRef } from "react";

import { motion, useScroll, useMotionValueEvent, useTransform, useMotionTemplate } from "framer-motion"

import Section1 from '@components/home/Section1';
import Section2 from '@components/home/Section2';
import Section3 from '@components/home/Section3';
import Section4 from '@components/home/Section4';
import Section5 from '@components/home/Section5';

import styles from "@styles/pages/home.module.scss";

export default function Home(){
    return(
        <motion.main 
            className={styles.main}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <Section1 />
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    <Section2 />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section3}`}>
                {/* <div className="inner">
                    <Section3 />
                </div> */}
                <Section3 />
            </section>
            <section className={`${styles.section} ${styles.section4}`}>
                {/* <Section4 /> */}
                <div className="inner">
                    <Section4 />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section5}`}>
                <Section5 />
            </section>
        </motion.main>
    )
}