import { useRef, useState, useEffect } from "react"; 
import { Link } from 'react-router-dom';

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

    const boxAnim = {
        initial: {
            opacity: 0.2,
            y: 200
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.5
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
        const latest = displayData.filter(item => item.important);
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
                        WORK<br />
                        EXPERIENCE
                    </motion.h1>
                    <motion.a 
                        href="/work" 
                        className={styles.link}
                        variants={Hover}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap" 
                        title="포트폴리오 더 보기"
                    >
                        포트폴리오 더 보기
                    </motion.a>
                </div>
                <div className={styles["list-box"]}>
                    <motion.div className={styles.bg} style={{ scaleX: scrollYProgress }}></motion.div>
                    <motion.ul className={styles.list}
                        variants={boxAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        {
                            displayData.map(item => 
                            <motion.li 
                                key={item.id}
                                className={styles["list__item"]}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: {
                                        duration: 0.1
                                    }
                                }}
                            >
                                <Link
                                    to={`/work/${item.id}`}
                                    state={{data: item}}
                                    title={`${item.title} 상세 페이지로 이동`}>
                                    <div className={styles["img-box"]}>
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <span className={styles.year}>{item.year}</span>
                                    <strong className={styles.title}>{item.title}</strong>
                                    <div className={styles["text-box"]}>
                                        {item.tag.map((value, i) => <span key={i}>{value}</span>)}
                                    </div>
                                </Link>
                            </motion.li>
                            )
                        }
                    </motion.ul>
                </div>
            </div>
        </section>
    )
}