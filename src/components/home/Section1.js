import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import styles from "@styles/components/home/section1.module.scss";

export default function Section1(){
    const visualAnim = {
        start: { opacity: 0 },
        end: {
            opacity: 1,
            transition: {
                // type: "spring",
                // stiffness: 60,
                // delayChildren: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.15,
            } 
        }
    }
    const visualTextAnim = {
        start: { opacity: 0, y: 20 },
        end: { opacity: 1, y: 0 },
    }

    const innerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: innerRef,
        offset: ["70vh", 0]
    });

    const bounce = {
        start: {
            opacity: 0.5,
            y: 4
        },
        end: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
    return(
        <div className={styles.inner} ref={innerRef}>
            <motion.div className={styles.visual} initial="start" animate="end" variants={visualAnim}>
                {/* <div className={styles['visual-head']}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
                <div className={styles['visual-body']}>
                    <motion.h1 
                        className={styles.title} 
                        >
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <br />
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                    </motion.h1>
                </div>
            </motion.div>
            <motion.div
                className={styles.scroll}
                style={{ opacity: scrollYProgress }}
            >
                Scroll Down
                <motion.span
                    className={styles.bounce}
                    variants={bounce}
                    initial="start"
                    animate="end"
                >
                ️❤️
                </motion.span>
            </motion.div>
        </div>
    )
}