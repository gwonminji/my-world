import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import Marquee from "@components/Marquee";

import styles from "@styles/pages/detail.module.scss";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Detail() {
  const location = useLocation();
  const data = location.state.data;
  // console.log(data);

  return (
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
            <div className={styles.year}>{data.year}</div>
            <div className={styles["text-box"]}>
              <span>
                {data.tag.map((value, i) => (
                  <span key={i}>{value}</span>
                ))}
              </span>
            </div>
            <h1 className={styles.title}>{data.title}</h1>
            {data.url === "" ? (
              ""
            ) : (
              <a
                href={data.url}
                className={styles.url}
                target="_blank"
                title={`${data.title} 새창으로 열림`}
              >
                <FaExternalLinkAlt />
                {data.url}
              </a>
            )}
            {/* <div className={styles["text-box"]}>
              <span>
                {data.tag.map((value, i) => (
                  <span key={i}>{value}</span>
                ))}
              </span>
            </div> */}
            <p className={styles.detail}>{data.detail}</p>
          </div>
        </div>
      </section>
      <Marquee />
    </main>
  );
}
