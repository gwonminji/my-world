import { motion, useAnimationFrame } from "framer-motion";

import styles from "@styles/components/marquee.module.scss";

export default function Marquee() {
  const marqueeText =
    "Let's create something together. Drop me a line! Let's create something together. Drop me a line!";
  const marqueeAnim = {
    animate: {
      x: [0, -5500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className={styles["marquee-wrap"]}>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeAnim}
          animate="animate"
        >
          <h1>{marqueeText}</h1>
        </motion.div>
        {/* <div className={styles.track}>
          <h1>{marqueeText}</h1>
        </div> */}
      </div>
    </div>
  );
}
