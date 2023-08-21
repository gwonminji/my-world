import { Link } from "react-router-dom";
import { useEffect } from 'react';

import { AnimatePresence, motion, useCycle } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHouse, 
    faIdCard, faIdBadge, 
    faList, faBorderAll, 
    faEnvelope } from "@fortawesome/free-solid-svg-icons"

import styles from "@styles/components/slidemenu.module.scss"

const links = [
    // { id: 1, name: "HOME", to: "/", icon: faHouse },
    // { id: 2, name: "ABOUT", to: "/about", icon: faIdCard },
    // { id: 3, name: "WORK", to: "/work", icon: faList },
    // { id: 4, name: "CONTACT", to: "/contact", icon: faEnvelope },
    { id: 1, name: "first", to: "/", icon: faHouse },
    { id: 2, name: "second", to: "/about", icon: faIdCard },
    { id: 3, name: "third", to: "/work", icon: faList },
    { id: 4, name: "fourth", to: "/contact", icon: faEnvelope },
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
            staggerChildren: 0,
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

    // useEffect(() => {
        
    //     if(open){
    //         document.body.classList.add("hidden")
    //     }else{
    //         document.body.classList.remove("hidden")
    //     }
    // }, [open])
    
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
                                width: "85vw"
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.3, duration: 0.2 }
                            }}
                        >
                            <motion.div
                                className={styles["gnb__item"]}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                            {links.map(({ name, to, id, icon }) => (
                                <Link 
                                    to={to}
                                    key={id}
                                    className={styles["gnb__link"]}
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        variants={itemVariants}
                                        onClick={cycleOpen}
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                        {name}
                                    </motion.span>
                                </Link>
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