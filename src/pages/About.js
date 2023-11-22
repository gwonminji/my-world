import { useEffect, useState } from 'react';

import { motion } from "framer-motion";

import Visual from '@components/Visual';
import Marquee from '@components/Marquee';
import Title from '@components/Title';

import skill from '@stores/skillList';
import history from '@stores/historyList';

import styles from "@styles/pages/about.module.scss";

export default function About(){
    const visualText = ["111", "222", "333"];
    // const visualText = ["want to", "know", "more?"];

    const iAm = "Lorem ipsum.Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum. Lorem ipsumLorem ipsumLorem ipsumLorem ipsum. Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum."
    // const iAm = "저는 코드를 통해 UI를 그려내는 일을 좋아합니다. 컴포넌트 단위의 유지보수에 최적화 된 마크업과 의미있는 구조의 시멘틱 마크업에 관심이 많으며, CSS와 Javascript를 활용한 동적 모션을 구현하는 것과 사용자 입장에서 더 나은 UI 방향에 대해 고민하곤 합니다. 좋아하는 일을 즐기면서 잘하는 것, 제가 꿈꾸는 저의 모습입니다."

    const title = ["I aa", "Waaa Eaaaaaaa"];
    // const title = ["I am", "Work Experience"];
    
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Visual text={visualText} />
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner" >
                    <Title title={title[0]} />
                    <motion.div 
                        className={styles["i-am"]}
                        variants={textAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <p className={styles.text}>{iAm}</p>
                    </motion.div>
                    <motion.ul
                        className={styles.skill}
                        variants={parentAnim}
                        initial="initial"
                        whileInView="whileInView" 
                    >
                        {
                            skillData.map(item => 
                            <motion.li
                                key={item.id}
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
                    <Title title={title[1]} />
                    <motion.ul
                        className={styles.history}
                        variants={parentAnim}
                        initial="initial"
                        whileInView="whileInView" 
                    >
                        {
                            historyData.map(item => 
                            <motion.li
                                key={item.id}
                                variants={historyAnim}
                            >
                                <span>{item.year}</span>
                                <div>
                                    <strong>{item.title}</strong>
                                    <p>{item.text}</p>
                                </div>
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