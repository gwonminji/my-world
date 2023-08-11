import { motion, useScroll } from "framer-motion";

import styles from "@styles/components/home/section4.module.scss";

export default function Section4(){ 
    const { scrollYProgress } = useScroll(); 
    // scrollYProgress.onChange(x => {
    //     console.log("스크롤 : ", x);
    // })
    const textAnim = {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.25
            }
        }
    }
    return(
        <section className={styles.section}>
            <div className="inner">
                <div className={styles.out}>
                    <motion.h1 
                        className={styles.title1}
                        variants={textAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </motion.h1>
                    <motion.div 
                        className={styles.box}
                        style={{ scale: scrollYProgress }}
                    >
                        <p>텍스트1</p>
                        <p>텍스트2</p>
                        <p>텍스트3</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}