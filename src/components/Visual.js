import { motion } from "framer-motion";

import styles from "@styles/components/visual.module.scss";

export default function Visual(props){
    const visualAnim = {
        start: { opacity: 0 },
        end: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            } 
        }
    }
    const visualTextLeftAnim = {
        start: {
            x: "-50%",
            opacity: 0
        },
        end: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }
    const visualTextRightAnim = {
        start: {
            x: "50%",
            opacity: 0
        },
        end: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }
    return(
        <section className={styles["visual-wrap"]}>
            <div className="inner">
                <div className={styles.visual}>
                    {/* {props.text} */}
                    {/* {
                        props.text.map((e, i) => console.log(`${i} : ${e}`))
                    } */}
                    <motion.h1 
                        className={styles["visual-title"]}
                        variants={visualAnim} 
                        initial="start"
                        animate="end"
                    >
                        {
                            props.text.map((text, i) =>          
                            <motion.span
                                key={i}
                                variants={i % 2 === 0 ? visualTextLeftAnim : visualTextRightAnim}
                            >{text}
                            </motion.span>
                            )
                        }
                    </motion.h1>
                </div>
            </div>
        </section>
    )
}