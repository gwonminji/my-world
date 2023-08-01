import { motion, useScroll } from "framer-motion";

import styles from "@styles/components/home/section3.module.scss";

export default function Section3(){
    // const list = {
    //     hidden: {
    //         opacity: 0
    //     },
    //     visible: {
    //         opacity: 1,
    //         transition: {
    //             type: "spring",
    //             stiffness: 60,
    //             // delayChildren: 0.1,
    //             when: "beforeChildren",
    //             staggerChildren: 0.2
    //         }
    //     }
    // }
    // const item = {
    //     hidden: { 
    //         opacity: 0,
    //         y: 50 
    //     },
    //     visible: { 
    //         opacity: 1,
    //         y: 0 
    //     }
    // }
    const { scrollYProgress } = useScroll();
    const list = [
        {id: 1, title: "리스트1"},
        {id: 2, title: "리스트2"},
        {id: 3, title: "리스트3"},
    ]
    return(
        <div className={styles.inner}>
            <div className={styles["sticky-box"]}>
                <h1>스티키1</h1>
                <h2>스티키2</h2>
            </div>
            <div className={styles["list-box"]}>
                <motion.div className={styles.bg} style={{ scaleX: scrollYProgress }}></motion.div>
                <ul className={styles.list}>
                    <li className={styles["list__item"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png" alt="" />
                        </div>
                        <div className={styles["text-box"]}>
                            <p>텍스트1</p>
                            <p>텍스트2</p>
                            <p>텍스트3</p>
                        </div>
                    </li>
                    <li className={styles["list__item"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png" alt="" />
                        </div>
                        <div className={styles["text-box"]}>
                            <p>텍스트1</p>
                            <p>텍스트2</p>
                            <p>텍스트3</p>
                        </div>
                    </li>
                    <li className={styles["list__item"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png" alt="" />
                        </div>
                        <div className={styles["text-box"]}>
                            <p>텍스트1</p>
                            <p>텍스트2</p>
                            <p>텍스트3</p>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <motion.ul 
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
            </motion.ul> */}
        </div>
    )
}