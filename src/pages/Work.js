import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Visual from "@components/Visual";
import Marquee from "@components/Marquee";
import Modal from "@components/Modal";
import Title from "@components/Title";

import work from "@stores/workList";

import styles from "@styles/pages/work.module.scss";

export default function Work() {
  // const visualText = ["want to", "portfolio", "more?"];
  const visualText = ["My", "Portfolio"];

  const filters = ["all", "responsive", "adaptive", "pc", "mobile"];
  // const filters = ["all", "responsive", "pc", "mobile"];

  const title = "Portfolio";

  const [displayData, setDisplayData] = useState(work.items);
  const [active, setActive] = useState("all");

  // useEffect(() => {
  //   const cateId = sessionStorage.getItem("cateId");
  //   if (cateId === null || cateId === "undefined") {
  //     return;
  //   } else {
  //     filterHandler(cateId);
  //     sessionStorage.removeItem("cateId");
  //   }
  // }, []);

  const filterHandler = (cate) => {
    if (cate === active) return;
    setActive(cate);
    setDisplayData([]);

    if (cate === "all") {
      setDisplayData(work.items);
      return;
    }

    const filteredData = work.items.filter((item) => item.cate === cate);

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 400);
  };

  // const setCateId = () => {
  //   sessionStorage.setItem("cateId", active);
  // };

  // const [modalOpen, setModalOpen] = useState(false);
  // const [idx, setIdx] = useState(null);

  // const modalHandler = (e) => {
  //   setModalOpen(!modalOpen);
  //   setIdx(e.target.id);
  // };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Visual text={visualText} />
      <section className={styles.section}>
        <motion.div
          className="inner"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.25,
            },
          }}
        >
          <Title title={title} />
          <div className={styles.filter}>
            {filters.map((item) => (
              <motion.button
                key={item.i}
                className={active === item ? styles.active : ""}
                onClick={() => filterHandler(item)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.1,
                  },
                }}
                whileTap={{ scale: 0.9 }}
                title={item}
              >
                {item}
              </motion.button>
            ))}
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 767: 2, 1023: 2 }}
          >
            <Masonry className={styles.list}>
              {/* <AnimatePresence> */}
              {displayData.map((item, i) => (
                <motion.div
                  key={i}
                  // layout
                  // initial={{ transform: "scale(0)" }}
                  // animate={{ transform: "scale(1)" }}
                  // viewport={{ once: true }}
                  // exit={{ transform: "scale(0)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  viewport={{ once: true }}
                  exit={{ transform: { scale: 0 } }}
                  className={styles["list-item"]}
                >
                  <div className={styles["img-box"]}>
                    <motion.img
                      src={`${process.env.PUBLIC_URL}${item.img}`}
                      className={styles.img}
                      alt={item.project}
                    />
                  </div>
                  <motion.div
                    className={styles["text-box"]}
                    // initial={{ opacity: 0 }}
                    // whileHover={{
                    //     opacity: 1,
                    //     transition: {
                    //         duration: 0.25
                    //     }
                    // }}
                  >
                    <strong>{item.title}</strong>
                    <p>
                      {item.tag.map((value, i) => (
                        <span key={i}>{value}</span>
                      ))}
                    </p>
                    {/* <strong>{item.title}</strong> */}
                    {/* <motion.button
                                                    id={item.id}
                                                    whileHover={{ 
                                                        scale: 1.1,
                                                        transition: {
                                                            duration: 0.25
                                                        } 
                                                    }}
                                                    onClick={modalHandler}
                                                    title="more"
                                                >more
                                                </motion.button> */}
                    {/* <Link
                                                    to={`/work/${item.id}`}
                                                    state={{data: item}}
                                                    title="Detail"
                                                    onClick={setCateId}
                                                >
                                                    <motion.span
                                                        whileHover={{ 
                                                            scale: 1.1,
                                                            transition: {
                                                                duration: 0.25
                                                            } 
                                                        }}
                                                    >
                                                        Detail
                                                    </motion.span>
                                                </Link> */}
                  </motion.div>
                </motion.div>
              ))}
              {/* </AnimatePresence>                             */}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </section>
      <Marquee />
      {/* {modalOpen && <Modal modalHandler={modalHandler} idx={idx} />} */}
    </motion.main>
  );
}
