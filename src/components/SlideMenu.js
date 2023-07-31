import { AnimatePresence, motion, useCycle } from "framer-motion";

import styles from "@styles/components/slidemenu.module.scss"

const links = [
    // { id: 1, name: "home", to: "/" },
    // { id: 2, name: "about", to: "/about" },
    // { id: 3, name: "work", to: "/work" },
    // { id: 4, name: "contact", to: "/contact" },
    { id: 1, name: "first", to: "/" },
    { id: 2, name: "second", to: "/about" },
    { id: 3, name: "third", to: "/work" },
    { id: 4, name: "fourth", to: "/contact" },
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: {
        opacity: 1
    }
}
const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}
export default function SlideMenu(){
    const [open, cycleOpen] = useCycle(false, true);
    return(
        <div className={styles["aside-wrap"]}>
            {open && (
                <AnimatePresence>
                    <div className={styles.dimmed}></div>
                </AnimatePresence>
            )}
            <AnimatePresence>
                {open && (
                    <motion.aside
                        className={styles.aside}
                        initial={{ width: 0 }}
                        animate={{
                            width: "50vw"
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.3 }
                        }}
                    >
                        {/* <div className={styles.dimmed}></div> */}
                        <motion.div
                            className={styles.menu}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                        {links.map(({ name, to, id }) => (
                            <motion.a
                                key={id}
                                href={to}
                                className={styles.link}
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                            >
                            {name}
                            </motion.a>
                        ))}
                        </motion.div>
                    </motion.aside>
                    )}
            </AnimatePresence>
            <button className={styles["btn-gnb"]} onClick={cycleOpen}>button</button>
        </div>
    )
}