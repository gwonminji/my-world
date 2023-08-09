import { motion } from "framer-motion";

import Visual from '@components/Visual';
import Marquee from '@components/Marquee';
import Title from '@components/Title';

import styles from "@styles/pages/about.module.scss";

export default function About(){
    const visualText = ["one", "two", "three"]
    return(
        <motion.main 
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Visual text={visualText} />
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    <Title title="title1" />
                    <div className={styles["i-think"]}>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
                    </div>
                    <ul className={styles.skill}>
                        <li>
                            <strong>Lorem Ipsum</strong>
                            <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            </p>
                        </li>
                        <li>
                            <strong>Lorem Ipsum</strong>
                            <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            </p>
                        </li>
                        <li>
                            <strong>Lorem Ipsum</strong>
                            <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            </p>
                        </li>
                        <li>
                            <strong>Lorem Ipsum</strong>
                            <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum.<br />
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section3}`}>
                <div className="inner">
                    <Title title="title2" />
                    <ul className={styles.history}>
                        <li>
                            <span>11111</span>
                            <p>
                                <strong>box</strong>
                                Lorem Ipsum
                            </p>
                        </li>
                        <li>
                            <span>2222</span>
                            <p>
                                <strong>box</strong>
                                Lorem Ipsum
                            </p>
                        </li>
                        <li>
                            <span>3333</span>
                            <p>
                                <strong>box</strong>
                                Lorem Ipsum
                            </p>
                        </li>
                        <li>
                            <span>4444</span>
                            <p>
                                <strong>box</strong>
                                Lorem Ipsum
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <Marquee />
        </motion.main>
    )
}