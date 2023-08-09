import { useEffect, useState } from 'react';

import { motion } from "framer-motion";

import Visual from '@components/Visual';
import Marquee from '@components/Marquee';
import Title from '@components/Title';

import skill from '@stores/skillList';
import history from '@stores/historyList';

import styles from "@styles/pages/about.module.scss";

export default function About(){
    const visualText = ["one", "two", "three"]

    const [skillData, setSkillData] = useState([]);
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        setSkillData(skill.items);
        setHistoryData(history.items);
    }, [])

    const textAnim = {
        initial: {
            opacity: 0,
            y: "80%"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const parentAnim = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.25
            }
        }
    }

    const skillAnim = {
        initial: {
            opacity: 0,
            scale: 0.35
        },
        whileInView: {
            opacity: 1,
            scale: 1,
        }
    }

    const historyAnim = {
        initial: {
            y: "200%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    }
    return(
        <motion.main 
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Visual text={visualText} />
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner" >
                    <Title title="title1" />
                    <motion.div 
                        className={styles["i-think"]}
                        variants={textAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                    </motion.div>
                    <motion.ul
                        className={styles.skill}
                        variants={parentAnim}
                        initial="initial"
                        whileInView="whileInView" 
                    >
                        {
                            skillData.map((item, i) => 
                            <motion.li
                                key={i}
                                variants={skillAnim}
                            >
                                <strong>{item.title}</strong>
                                <p>{item.text}</p>
                            </motion.li>
                            )
                        }
                    </motion.ul>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    <Title title="title2" />
                    <motion.ul
                        className={styles.history}
                        variants={parentAnim}
                        initial="initial"
                        whileInView="whileInView" 
                    >
                        {
                            historyData.map((item, i) => 
                            <motion.li
                                key={i}
                                variants={historyAnim}
                            >
                                <span>{item.year}</span>
                                <p>
                                    <strong>{item.title}</strong>
                                    {item.text}
                                </p>
                            </motion.li>
                            )
                        }
                    </motion.ul>
                </div>
            </section>
            <Marquee />
        </motion.main>
    )
}