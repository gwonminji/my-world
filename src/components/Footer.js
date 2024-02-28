import { motion } from 'framer-motion';

import styles from "@styles/components/footer.module.scss"

export default function Footer(){
    const bounce = {
        initial: {
            opacity: 0.5,
            y: 4
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
    return(
        <footer className={styles.footer}>
            <div className="inner">
                <p>
                    Made by <span>MJ</span>
                    <motion.span
                        className={styles.bounce}
                        variants={bounce}
                        initial="initial"
                        animate="animate"
                    >
                    ️❤️
                    </motion.span>
                </p>
                <p>&copy; 2024 gwonminji.github.io</p>
            </div>
        </footer>
    )
}