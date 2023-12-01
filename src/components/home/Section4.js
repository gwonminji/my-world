import { motion, useScroll } from "framer-motion";

// import { IoPersonOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

import styles from "@styles/components/home/section4.module.scss";

import profile from '@assets/images/img_profile.jpg';

export default function Section4(){ 
    const { scrollYProgress } = useScroll(); 
    // scrollYProgress.onChange(x => {
    //     console.log("스크롤 : ", x);
    // })
    const textAnim = {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.25
            }
        }
    }

    const title = "함께 일할 동료를 찾고 계신가요?";

    return(
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
                <motion.div 
                    className={styles.box}
                    style={{ scale: scrollYProgress }}
                >
                    <div className={styles["img-box"]}>
                        <img src={profile} alt="권민지" />
                    </div>
                    <ul className={styles.profile}>
                        <li>web publisher 권민지</li>
                        <li><BsTelephone /><a href="tel:01094341823" title="01094341823으로 전화걸기">010.9434.1823</a></li>
                        <li><CgBrowser /><a href="http://gwonminji.github.io" target="_blank" title="새창으로 열림">http://gwonminji.github.io</a></li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}