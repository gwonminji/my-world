import { motion } from "framer-motion";

import Visual from '@components/Visual';

import styles from "@styles/pages/about.module.scss";

export default function About(){
    const visualText = ["one", "two", "three"]
    return(
        <motion.main 
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    <Visual text={visualText} />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                page1 section2
            </section>
        </motion.main>
    )
}