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
                        <span className={styles.highlight}>WORK DETAIL</span>
                        <h1 className={styles.title}>
                            {data.title}
                            <span className={styles.year}>{data.year}</span>
                        </h1>
                        <div className={styles["text-box"]}>
                            {/* <span>{data.cate}</span> */}
                            {/* <span>{data.summary}</span> */}
                            <span>{data.tag.map((v, i) => <span key={i}>#{v}</span>)}</span>
                        </div>
                        <p className={styles.detail}>{data.detail}</p>
                    </div>
                </div>
            </section>
            <Marquee />
        </main>
    )
}