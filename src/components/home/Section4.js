import { useState, useRef, useEffect } from "react";
import {
    motion,
    scrollYProgress,
    // useViewportScroll,
    useTransform,
    useScroll
} from "framer-motion";

import styles from "@styles/components/home/section4.module.scss";

export default function Section5(){ 
    const { scrollYProgress } = useScroll(); 
    scrollYProgress.onChange(x => {
        console.log("전체 : ", x);
    })
    return(
        <div className={styles.out}>
            <motion.h1 
                className={styles.title1}
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { delay: 0.25 }
                }}
            >Lorem Ipsum Lorem Ipsum Lorem Ipsum</motion.h1>
            {/* <motion.h2 
                className={styles.title2}
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { delay: 0.4 }
                }}
            >Lorem Ipsum Lorem Ipsum Lorem Ipsum</motion.h2> */}
            <motion.div 
                className={styles.box}
                // initial={{ scale: 1 }}
                // animate={{ scale: 1, rotateZ: 360 }}
                style={{ scale: scrollYProgress }}
                // whileHover={{ scale: 1.1 }}
            >
                <p>텍스트1</p>
                <p>텍스트2</p>
                <p>텍스트3</p>
            </motion.div>
        </div>
    )
}