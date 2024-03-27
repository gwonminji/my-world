import { motion } from "framer-motion";

import Section1 from "@components/home/Section1";
import Section2 from "@components/home/Section2";
import Section3 from "@components/home/Section3";
import Section4 from "@components/home/Section4";
import Marquee from "@components/Marquee";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Marquee />
    </motion.main>
  );
}
