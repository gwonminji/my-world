import { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import Visual from '@components/Visual';
import Marquee from '@components/Marquee';

import styles from "@styles/pages/work.module.scss";

export default function Work(){
    const visualText = ["three", "two", "one"]

    const filters = ["all", "1", "2", "3"]

    const data = {
        items: [
            {
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "1",
                text: "cate1"
            },
            {
                img: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2t8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=200&q=75",
                cate: "2",
                text: "cate2"
            },
            {
                img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "1",
                text: "cate1"
            },
            {
                img: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "3",
                text: "cate3"
            },
            {
                img: "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "1",
                text: "cate1"
            },
            {
                img: "https://images.unsplash.com/photo-1630396592772-649470e66096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "3",
                text: "cate3"
            },
            {
                img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
                cate: "2",
                text: "cate2"
            }
        ]
    };

    const [displayData, setDisplayData] = useState(data.items);
    const [active, setActive] = useState("all");

    const handleClick = (cate) => {
        if(cate === active) return;
        setActive(cate);
        setDisplayData([]);

        if (cate === "all") {
            setDisplayData(data.items);
            return;
        }

        const filteredData = data.items.filter(
            (item) => item.cate === cate
        );
    
        setTimeout(() => {
            setDisplayData(filteredData);
        }, 400);
    }
    return(
        <motion.main 
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className={`${styles.section} ${styles.section1}`}>
                <div className="inner">
                    <Visual text={visualText} />
                </div>
            </section>
            <section className={`${styles.section} ${styles.section2}`}>
                <div className="inner">
                    <h1 className="section-title">title</h1>
                    <div className={styles.filter}>
                    {
                        filters.map((item, i) => (
                            <button 
                                className={active === item && styles.active} 
                                onClick={() => handleClick(item)}
                            >
                            {item}
                            </button>
                        ))
                    }
                    </div>
                    <ul className={styles.list}>
                        <AnimatePresence>
                            {
                                displayData.map(({img, cate, text}, i) => (
                                    <motion.li
                                        key={i}
                                        layout
                                        initial={{ transform: "scale(0) "}}
                                        animate={{ transform: "scale(1) "}}
                                        exit={{ transform: "scale(0) "}}
                                    >
                                        <div className={styles["img-box"]}>
                                            <motion.img
                                                src={img}
                                                className={styles.img}
                                            />
                                        </div>
                                        <div className={styles["text-box"]}>{text}</div>
                                    </motion.li>
                                ))
                            }
                        </AnimatePresence>                            
                    </ul>
                        {/* <div>
                            <AnimatePresence>
                            {displayData.map(({ img, cate }, i) => (
                                <motion.div
                                    style={{ overflow: "hidden" }}
                                    key={i}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    exit={{ transform: "scale(0)" }}
                                >
                                <motion.img
                                    src={img}
                                    className="rounded"
                                    alt="nothing"
                                    width="100%"
                                />
                                </motion.div>
                            ))}
                            {
                                displayData.map(({img}, i) => <div key={i}>{img}</div>)
                            }
                            </AnimatePresence>
                        </div> */}
                </div>
            </section>
            <Marquee />
        </motion.main>
    )
}