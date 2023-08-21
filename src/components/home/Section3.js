import { useRef, useState, useEffect } from "react"; 

import { motion, useScroll } from "framer-motion";

import data from '@stores/workList';

import styles from "@styles/components/home/section3.module.scss";

export default function Section3(){
    const textAnim = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1,
            transition: {
                duration: 1
            } 
        }
    }
    
    const Hover = {
        initial: {
            left: -10
        },
        whileHover: {
            left: 0
        },
        whileTap: {
            scale: 0.9,
        }
    }
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const [displayData, setDisplayData] = useState(data.items);

    useEffect(() => {
        const latest = displayData.filter((item) => item.filter === "important");
        setDisplayData([]);
        setDisplayData(latest);
    }, [])

    return(
        <section className={styles.section}>
            <div 
                className={styles.inner} 
                ref={ref}
            >
                <div className={styles["sticky-box"]}>
                    <motion.h1
                        variants={textAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        {/* WORK<br />
                        EXPERIENCE */}
                        스티키 영역
                    </motion.h1>
                    <motion.a 
                        href="/work" 
                        className={styles.link}
                        variants={Hover}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap" 
                        title="More"
                    >
                        More
                    </motion.a>
                </div>
                <div className={styles["list-box"]}>
                    <motion.div className={styles.bg} style={{ scaleX: scrollYProgress }}></motion.div>
                    <ul className={styles.list}>
                        {
                            displayData.map((item, i) => 
                            <li 
                                key={i}
                                className={styles["list__item"]}
                            >
                                <div className={styles["img-box"]}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className={styles["text-box"]}>
                                    <span>{item.cate}</span>
                                    <strong>{item.title}</strong>
                                </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}