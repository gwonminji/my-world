import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import Lottie from "lottie-react";
import scrollLottie from "@assets/lottie/scroll.json";

import styles from "@styles/components/home/section1.module.scss";

export default function Section1(){
    const text1 = "GWON";
    const text2 = "MINJI";
    const text1Arr = text1.split('');
    const text2Arr = text2.split('');

    const visualAnim = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            } 
        }
    }

    const visualTextAnim = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }

    const innerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: innerRef,
        offset: ["70vh", 0]
    });

    return(
        <section className={styles.section}>
            <div className={styles.inner} ref={innerRef}>
                <motion.div 
                    className={styles.visual}
                    variants={visualAnim}
                    initial="initial" 
                    animate="animate" 
                >
                    <div className={styles['visual-body']}>
                        <h1 className={styles.title}>
                            {
                                text1Arr.map((item, i) => 
                                <motion.span
                                    key={i}
                                    variants={visualTextAnim}
                                >
                                    {item}
                                </motion.span>
                                )
                            }
                            <br />
                            {
                                text2Arr.map((item, i) => 
                                <motion.span
                                    key={i}
                                    variants={visualTextAnim}
                                >
                                    {item}
                                </motion.span>
                                )
                            }
                        </h1>
                    </div>
                </motion.div>
                <motion.div
                    className={styles.scroll}
                    style={{ opacity: scrollYProgress }}
                >
                    <span>Scroll Down</span>
                    <Lottie animationData={scrollLottie} />
                </motion.div>
            </div>
        </section>
    )
}