import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"

import styles from "@styles/pages/home.module.scss";

export default function Home(){
    const { scrollY, scrollYProgress } = useScroll();
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("page scroll : ", latest)
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    const visualAnim = {
        end: {
            transition: {
                // type: "spring",
                // stiffness: 110,
                // delayChildren: 2,
                staggerChildren: 0.15,
            } 
        }
    }
    const visualTextAnim = {
        start: { opacity: 0, y: 10 },
        end: { opacity: 1, y: 0 },
    } 
    //scale : 크기, opacity : 투명도
    return(
        <main className={styles.main}>
            <motion.section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    {/* <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "linear", duration: 2 }}
                    >lorem ipsum
                    </motion.h1> */}
                    <motion.div className={{styles}}>
                        <div></div>
                    </motion.div>
                    <motion.h1 
                        className={styles.title}
                        initial="start" animate="end" 
                        variants={visualAnim}>
                        <motion.span variants={visualTextAnim}>a</motion.span>
                        <motion.span variants={visualTextAnim}>b</motion.span>
                        <motion.span variants={visualTextAnim}>c</motion.span>
                        <motion.span variants={visualTextAnim}>d</motion.span>
                        <motion.span variants={visualTextAnim}>e</motion.span>
                        <motion.span variants={visualTextAnim}>,</motion.span>
                        <br />
                        <motion.span variants={visualTextAnim}>f</motion.span>
                        <motion.span variants={visualTextAnim}>f</motion.span>

                        <motion.span variants={visualTextAnim}>e</motion.span>
                        <motion.span variants={visualTextAnim}>e</motion.span>
                        <motion.span variants={visualTextAnim}>e</motion.span>
                        <motion.span variants={visualTextAnim}>e</motion.span>
                        <motion.span variants={visualTextAnim}>e</motion.span>
                    </motion.h1>
                </div>
            </motion.section>
            <section className={`${styles.section} ${styles.section2}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: false }}
            >
                <div className="inner">
                    <motion.div
                        style={{ scale }}
                    >section2
                    </motion.div>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section3}`}>
                <div className="inner">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >section3
                    </motion.div>
                </div>
            </section>
        </main>
    )
}