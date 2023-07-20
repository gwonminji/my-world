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

    const [scale, setScale] = useState();
    const [position, setPosition] = useState();
    const [rotate, setRotate] = useState();

    /** 원본 */
    // const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200])
    // const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])

    const scaleAnim = useTransform(scrollYProgress, [0.6, 0.7, 1], [1, 1.2, 0.8])
    const yPosAnim = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 100, 200])
    const zRotAnim = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 3, 0])

    // const scaleAnim = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.2, 0.8])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, 100, 200])
    // const zRotAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, 3, 0])

    // const scaleAnim = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1.2, 0.8])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 100, 200])
    // const zRotAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 3, 0])

    useEffect(() => {
        scrollY.onChange(() => 
        // console.log(`scrollY : ${scrollY.get()}, scrollYProgress : ${scrollYProgress.get()}`)
        []
        )
    }, [scrollY, scrollYProgress])
    scrollYProgress.onChange(x => {
        console.log("Envelope : ", x);

        // setFfLayer(x > 0.4 ? -1 : 0)
        setFfLayer(x > 0.7 ? -1 : 0)


        // setScale(x > 0.6 ? scaleAnim : '');
        // setPosition(x > 0.6 ? yPosAnim : '');
        // setRotate(x > 0.6 ? zRotAnim : '');
    })

    return(
        <motion.div
            className={styles.envelope}
            // style={{ scale: scaleAnim, y: yPosAnim }}
            style={{ scale: scaleAnim, y: yPosAnim, rotateZ: zRotAnim }}
            // style={{ scale: scale, y: position, rotateZ: rotate }}
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
    const [scale, setScale] = useState();
    const [position, setPosition] = useState();

    const { scrollYProgress } = useScroll()
    /**원본 */
    // const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])

    const scaleAnim = useTransform(scrollYProgress, [0.6, 0.75, 1], [1, 1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0.6, 0.65, 1], [0, -250, -100])

    // const scaleAnim = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 1.5])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])

    // const scaleAnim = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1.5])
    // const yPosAnim = useTransform(scrollYProgress, [0, 0.1, 1], [0, -250, -100])
    
    scrollYProgress.onChange(x => {
        console.log("Letter : ", x);
        // setScale(x > 0.6 ? scaleAnim : '');
        // setPosition(x > 0.6 ? yPosAnim : '');
    })
    return(
        <motion.div 
            className={styles.letter}
            style={{ scale: scaleAnim, y: yPosAnim }}
            // style={{ scale: scale, y: position }}
        >
            
        </motion.div>
    )
}
export default function Section5(){ 
    const [visible, setVisible] = useState(0);
    const { scrollYProgress } = useScroll(); 
    scrollYProgress.onChange(x => {
        console.log("전체 : ", x);
        setVisible(x > 0.6 ? x : 0)
    })
    return(
        <div className={styles['letter-scene']} style={{ opacity: visible }}>
        {/* <div className={styles['letter-scene']}> */}
            <Envelope>
                <Letter />
            </Envelope>
        </div>
    )
}