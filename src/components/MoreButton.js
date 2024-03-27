import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import styles from "@styles/components/morebutton.module.scss";

export default function MoreButton({ to, title }) {
  const Hover = {
    initial: {
      left: -10,
    },
    whileHover: {
      left: 0,
    },
    whileTap: {
      scale: 0.9,
    },
  };

  return (
    <motion.span
      className={styles.link}
      variants={Hover}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <Link to={to} title={title}>
        {title}
      </Link>
    </motion.span>
  );
}
