import { useRef } from "react";

import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate
} from "framer-motion";

import styles from "@styles/components/home/section2.module.scss";

const content = [
    "Lorem ipsum dolor sit amet, ",
    "sed do eiusmod tempor ",
    "dolore magna aliqua. Ut ",
    "quis nostrud exercitation ",
    "nisi ut aliquip ex ",
    "Duis aute irure dolor"
];

const ContentLine = ({ content }) => {
    const contentRef = useRef();

    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["end center", "start start"]
    });

    const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
    const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

    return (
        <span className={styles['text-container']} ref={contentRef}>
            <motion.span
                style={{ clipPath: clipPathVal }}
                className={styles['highlighted-text']}
                data-text={content}
            />
            <span className={styles['static-text']}>{content}</span>
        </span>
    )
}
export default function Section2(){
    return(
        <div className={styles.outer}>
            <div className={styles.inner}>
                <p>
                    {content.map((item) => (
                        <ContentLine key={item} content={item} />
                    ))}
                </p>
            </div>
        </div>
    )
}