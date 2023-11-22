import { motion, useScroll } from "framer-motion";

// import { IoPersonOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

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
                {/* <div className={styles.out}>
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
                </div> */}
                <motion.h1 
                    className={styles.title}
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
                    <div>
                    </div>
                    <ul>
                        <li>UI Developer 권민지</li>
                        <li><BsTelephone /><a href="tel:01094341823" title="01094341823으로 전화걸기">010.9434.1823</a></li>
                        <li><CgBrowser /><a href="http://gwonminji.github.io" target="_blank" title="새창으로 열림">http://gwonminji.github.io</a></li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}