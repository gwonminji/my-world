// import { Link } from "react-router-dom";

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
        <aside>
            <AnimatePresence>
                {open && (
                    <div>
                        <div className={styles.dimmed}></div>
                        <motion.div
                            className={styles.gnb}
                            initial={{ width: 0 }}
                            animate={{
                                width: "80vw"
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.7, duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className={styles["gnb__item"]}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                            {links.map(({ name, to, id }) => (
                                <motion.a
                                    key={id}
                                    href={to}
                                    className={styles["gnb__link"]}
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                >
                                {name}
                                </motion.a>
                                // <Link 
                                //     to={to}
                                //     key={id}
                                //     className={styles["gnb__link"]}
                                //     whileHover={{ scale: 1.1 }}
                                //     variants={itemVariants}
                                // >
                                // {name}
                                // </Link>
                            ))}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <button className={open ? `${styles.btn} ${styles["btn--active"]}` : styles.btn} onClick={cycleOpen}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </aside>
    )
}