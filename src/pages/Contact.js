import { motion } from "framer-motion";

import Marquee from '@components/Marquee';

import styles from "@styles/pages/contact.module.scss";

export default function Contact(){
    return(        
        <motion.main
            className={styles.contact}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    <div>
                        <h1>11111</h1>
                    </div>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    <div className={styles.form}>
                        ddd
                    </div>
                </div>
            </section>
            <Marquee />
        </motion.main>
    )
}