import { motion } from "framer-motion";

import styles from "@styles/pages/about.module.scss";

export default function About(){
    return(
        <motion.main 
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <h1>page1 section1</h1>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                page1 section2
            </section>
        </motion.main>
    )
}