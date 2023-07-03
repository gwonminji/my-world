import {
    motion
} from "framer-motion";

import styles from "@styles/components/home/section4.module.scss";

export default function Section5(){
    const variants = {
        start: {
            opacity: 0
        },
        end: {
            opacity: 1
        }
    }
    return(
        <motion.div
            className={styles.box}
            variants={variants}
            initial="start"
            whileInView="end"
        >
            section4
        </motion.div>
    )
}