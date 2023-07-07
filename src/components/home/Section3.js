import { motion } from "framer-motion";

import styles from "@styles/components/home/section3.module.scss";

export default function Section3(){
    const list = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                // delayChildren: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }
    const item = {
        hidden: { 
            opacity: 0,
            y: 50 
        },
        visible: { 
            opacity: 1,
            y: 0 
        }
    }

    return(
        <div>
            <motion.ul 
                className={styles.list}
                variants={list}
                initial="hidden"
                whileInView="visible"
            >
                <motion.li 
                    className={styles.item}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={styles.box}>box1</div>
                    <div className={styles['text-box']}>text1</div>
                </motion.li>
                <motion.li 
                    className={styles.item}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={styles.box}>box2</div>
                    <div className={styles['text-box']}>text2</div>
                </motion.li>
                <motion.li 
                    className={styles.item}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={styles.box}>box3</div>
                    <div className={styles['text-box']}>text3</div>
                </motion.li>
            </motion.ul>
        </div>
    )
}