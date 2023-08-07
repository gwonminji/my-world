import {
    motion
} from "framer-motion";

import styles from "@styles/components/marquee.module.scss";

export default function Marquee(){
    const marqueeAnim = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear",
                }
            }
        }
    }
    return(
        <div className={styles["marquee-wrap"]}>
            <div>
                <div className={styles.marquee}>
                    <motion.div
                        className={styles.track}
                        variants={marqueeAnim}
                        animate="animate"
                    >
                        <h1>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ.
                        </h1>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}