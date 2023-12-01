import {motion} from "framer-motion";

import styles from "@styles/components/marquee.module.scss";

export default function Marquee(){
    const marqueeText = "Let's create something together. Drop me a line! Let's create something together.";
    const marqueeAnim = {
        animate: {
            x: [0, -5000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 8,
                    ease: "linear",
                }
            }
        }
    }
    return(
        <div className={styles["marquee-wrap"]}>
            <div className={styles.marquee}>
                <motion.div
                    className={styles.track}
                    variants={marqueeAnim}
                    animate="animate"
                >
                    <h1>
                        {marqueeText}
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}