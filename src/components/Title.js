import { motion } from "framer-motion";

import styles from "@styles/components/title.module.scss"

export default function Title(props){
    const textAnim = {
        initial: { 
            y: "80%", 
            opacity: 0 
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    }

    return(
        <motion.h1
            className={styles.title}
            variants={ textAnim }
            initial="initial"
            whileInView="whileInView"
        >
            {props.title}
        </motion.h1>
    )
}