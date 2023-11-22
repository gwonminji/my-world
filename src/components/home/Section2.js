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
    // "안녕하세요.", 
    // "n년차 UI개발자 권민지입니다.",
    // "좋아하는 일을 즐기며 UI개발을 하고 있습니다.", 
    // "웹퍼블리싱을 능숙하게 작업할 수 있어요.",
    // "다양한 해상도에서도 잘 보이는 반응형, 웹 접근성과 웹표준을 고려한 웹페이지를 그려냅니다.",
    // "좋아하는 일을 즐기면서 오늘도 즐겁게 일하고 있어요!"
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
        <span 
            className={styles['text-container']} 
            ref={contentRef}
        >
            <motion.span
                className={styles['highlighted-text']}
                style={{ clipPath: clipPathVal }}
                data-text={content}
            />
            <span className={styles['static-text']}>{content}</span>
        </span>
    )
}
export default function Section2(){
    return(
        <section className={styles.section}>
            <div className="inner">
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <p>
                            {content.map((item) => (
                                <ContentLine key={item} content={item} />
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}