import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import data from '@stores/workList';

import styles from "@styles/components/modal.module.scss"

export default function Modal(props){
    const [list, setList] = useState(data.items);    

    useEffect(() => {
        const idx = parseInt(props.idx);

        const current = list.filter(
            (item) => item.id === idx
        );

        setList([]);

        setList(current);
        // setTimeout(() => {
        //     setList(current);
        //     console.log(list);
        // }, 400);
    }, [])

    return(
        <AnimatePresence>
            <motion.div 
                className={styles.modal}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                    scale: 1,
                    opacity: 1,
                    transition: {
                        // type: "spring", 
                        // stiffness: 400, 
                        // damping: 10
                    }
                }}
            >
                <div className={styles.dimmed}></div>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <button type="button" 
                            className={styles.close}
                            onClick={(e) => props.modalHandler(e)} 
                            title="닫기"
                        >
                            닫기
                        </button>
                    </div>
                    <div className={styles.body}>
                        {
                            list.map((item, i) => (
                                <>
                                    <div className={styles["img-box"]}>
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className={styles["text-box"]}>
                                        <div>
                                            <span className={styles.year}>{item.year}</span>
                                            <span className={styles.cate}>{item.cate}</span>
                                        </div>
                                        <strong>{item.title}</strong>
                                        <p>{item.text}</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}