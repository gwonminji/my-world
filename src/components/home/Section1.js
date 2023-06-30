import { motion } from "framer-motion";

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
    //scale : 크기, opacity : 투명도
    return(
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
    )
}