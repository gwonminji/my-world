import { useRef } from 'react';

import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';

import Marquee from '@components/Marquee';
import Title from '@components/Title';

import styles from "@styles/pages/contact.module.scss";

export default function Contact(){
    const visualText = "aaaa aa aa aaaaa";
    // const visualText = "send me an email";
    const text = visualText.split('');

    const title = "aaaaaaaa";
    // const title = "함께 일할 동료를 찾고 계신가요? 합류 및 협업 제안이 있으시다면 언제든지 연락해 주세요!";

    const textAnim = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.125
            }
        }
    }

    const textItemAnim = {
        initial: {
            display: "none",
        },
        animate: {
            display: "inline-block",
            transition: {
                duration: 0.6
            }
        }
    }

    const cursorAnim = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType : "reverse"
            }
        }
    }

    const boxAnim = {
        initial: {
            opacity: 0.3,
            scale: 0.3
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    const btnAnim = {
        initial: {
            scale: 1,
        },
        whileHover: {
            scale: 1.2
        },
        whileTap: {
            scale: 0.9
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_milpfrm", "template_1ys7jcl", form.current, "aI8pJKnAI1GBX8lUG")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(        
        <motion.main
            className={styles.contact}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    <div className={styles.visual}>
                        <motion.h1
                            variants={textAnim}
                            initial="initial"
                            animate="animate"
                        >
                            {
                                text.map((item, i) => 
                                <motion.span 
                                    key={i}
                                    className={styles["visual-text"]}
                                    variants={textItemAnim}
                                >
                                    {item}
                                </motion.span>
                                )
                            }
                        </motion.h1>
                        <motion.span 
                            className={styles.cursor}
                            variants={cursorAnim}
                            initial="initial"
                            animate="animate"
                        ></motion.span>
                    </div>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    {/* <motion.p></motion.p> */}
                    <Title title={title} />
                    <motion.div 
                        className={styles["form-wrap"]}
                        variants={boxAnim}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <form className={styles.form} onSubmit={sendEmail} ref={form}>
                            <div className={styles["form-row"]}>
                                <label 
                                    htmlFor="user-name" 
                                    className={styles.label}
                                >
                                    Name<span>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="user-name"
                                    name="user-name" 
                                    className={styles["input-text"]} 
                                    placeholder="이름을 입력하세요."
                                    required 
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <label 
                                    htmlFor="user-email" 
                                    className={styles.label}
                                >
                                    Email<span>*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="user-email"
                                    name="user-email" 
                                    className={styles["input-text"]} 
                                    placeholder="이메일을 입력하세요."
                                    required 
                                />
                            </div>
                            <textarea 
                                name="user-msg" 
                                className={styles.textarea} 
                                placeholder="전송할 메시지를 입력하세요." 
                                required
                            />
                            <button 
                                className={styles.submit} 
                                title="Send"
                            >
                                <motion.span
                                    variants={btnAnim}
                                    initial="initial"
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                >
                                    Send
                                </motion.span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
            <Marquee />
        </motion.main>
    )
}