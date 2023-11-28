import { motion } from "framer-motion";

import styles from "@styles/components/visual.module.scss";

export default function Visual({text}){
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
            x: "-100%",
            opacity: 0
        },
        end: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    }
    const visualTextRightAnim = {
        start: {
            x: "100%",
            opacity: 0
        },
        end: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    }
    return(
        <section className={styles["visual-wrap"]}>
            <div className="inner">
                <div className={styles.visual}>
                    <motion.h1 
                        className={styles["visual-title"]}
                        variants={visualAnim} 
                        initial="start"
                        animate="end"
                    >
                        {
                            text.map((text, i) =>          
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