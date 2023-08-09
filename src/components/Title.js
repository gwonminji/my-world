import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import styles from "@styles/components/title.module.scss"

export default function Title(props){
    const textAnim = {
        initial: { 
            y: "50%", 
            opacity: 0 
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }

    return(
        <motion.h1
            variants={ textAnim }
            initial="initial"
            whileInView="whileInView"
            className={styles.title}
        >
            {props.title}
        </motion.h1>
    )
}