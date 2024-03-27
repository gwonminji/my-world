import { Link } from "react-router-dom";

import { motion, useScroll } from "framer-motion";

// import { IoPersonOutline } from "react-icons/io5";
// import { BsTelephone } from "react-icons/bs";
// import { CgBrowser } from "react-icons/cg";
import { IoIosLink } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { RiNotionLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

import styles from "@styles/components/home/section4.module.scss";

import profile from "@assets/images/img_profile.jpg";

export default function Section4() {
  const { scrollYProgress } = useScroll();
  // scrollYProgress.onChange(x => {
  //     console.log("스크롤 : ", x);
  // })
  const textAnim = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.25,
      },
    },
  };

  const title = "함께 일할 동료를 찾고 계신가요?";

  return (
    <section className={styles.section}>
      <div className="inner">
        <motion.h1
          className={styles.title}
          variants={textAnim}
          initial="initial"
          whileInView="whileInView"
        >
          {title}
        </motion.h1>

        <motion.div className={styles.box} style={{ scale: scrollYProgress }}>
          <div className={styles["img-box"]}>
            <img src={profile} alt="권민지" />
          </div>
          <ul className={styles.profile}>
            {/* <li>web publisher 권민지</li> */}
            <li>
              {/* <BsTelephone /> */}
              <Link
                to="https://pricey-walleye-337.notion.site/86b986de3c324f0a9ed9639755696534"
                title="자기 소개 더 보기"
                target="_blank"
              >
                <RiNotionLine /> <span>자기 소개 더 보기</span>
              </Link>
              {/* 010.9434.1823 */}
            </li>
            <li>
              {/* <CgBrowser /> */}
              <Link to="/contact" title="메일 보내기">
                <IoMdMail /> <span>메일 보내기</span>
              </Link>
              {/* http://gwonminji.github.io */}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
