import {
    motion
} from "framer-motion";

import styles from "@styles/components/marquee.module.scss";

export default function Marquee(){
    const marqueeText = "Lorem Ipsum Lorem Ipsum. Lorem Ipsum. Lorem Ipsum Lorem Ipsum. Lorem Ipsum.";
    // const marqueeText = "Let's create something together. Drop me a line!";
    const marqueeAnim = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
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