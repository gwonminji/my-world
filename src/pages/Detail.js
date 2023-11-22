import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion";

import Marquee from '@components/Marquee';

import styles from "@styles/pages/detail.module.scss";

export default function Detail(){    
    const location = useLocation();
    const data = location.state.data;
    console.log(data);

    return(
        <main>
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <div className={styles["img-area"]}>
                        <div className={styles["img-box"]}>
                            <img src={data.img} alt={data.title} />
                        </div>
                    </div>
                    <div className={styles["text-area"]}>
                        {/* <p className={styles.year}>{data.year}</p> */}
                        <div className={styles["text-box"]}>
                            <span className={styles.cate}>{data.cate}</span>
                            <strong className={styles.title}>{data.title}</strong>
                            <p className={styles.text}>{data.text}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Marquee />
        </main>
    )
}