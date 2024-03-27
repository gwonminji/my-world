import { motion } from "framer-motion";

import styles from "@styles/components/title.module.scss";

export default function Title({ title }) {
  const textAnim = {
    initial: {
      y: "60%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.h1
      className={styles.title}
      variants={textAnim}
      initial="initial"
      whileInView="whileInView"
    >
      {title.split("\n").map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
    </motion.h1>
  );
}
