import { useState, useRef, useEffect } from "react";
import {
    motion,
    scrollYProgress,
    // useViewportScroll,
    useTransform,
    useScroll
} from "framer-motion";

import styles from "@styles/components/home/section4.module.scss";

const Envelope = ({ children }) => {
    const [ffLayer, setFfLayer] = useState(0);
    const { scrollY, scrollYProgress } = useScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200])
    const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])
    // const scaleAnim = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1.2, 0.8])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 100, 200])
    // const zRotAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 3, 0])

    useEffect(() => {
        scrollY.onChange(() => console.log(`scrollY : ${scrollY.get()}, scrollYProgress : ${scrollYProgress.get()}`))
    }, [scrollY, scrollYProgress])
    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0)
    })

    return(
        <motion.div
            className={styles.envelope}
            style={{ position: "fixed", scale: scaleAnim, y: yPosAnim, rotateZ: zRotAnim }}
        >
            {children}
            <div 
                className={styles.front}
                style={{ zIndex: ffLayer }}
            >
            </div>
        </motion.div>
    )
}
const Letter = () => {
    const { scrollYProgress } = useScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])
    // const scaleAnim = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1.5])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.1, 1], [0, -250, -100])

    return(
        <motion.div 
            className={styles.letter}
            style={{ scale: scaleAnim, y: yPosAnim }}
        >
            
        </motion.div>
    )
}
export default function Section5(){    
    return(
        <div className={styles['letter-scene']}>
            <Envelope>
                <Letter />
            </Envelope>
        </div>
    )
}