import {
    motion
} from "framer-motion";

import styles from "@styles/components/home/section4.module.scss";

export default function section4(){
    const marqueeAnim = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 6,
                    ease: "linear",
                }
            }
        }
    }
    return(
        <div>
            <div className={styles.marquee}>
                <motion.div
                    className={styles.track}
                    variants={marqueeAnim}
                    animate="animate"
                >
                    <h1>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ.
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ.
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ. ABCDEFGHIJKLMNOPQRSTUVWXYZ.
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}