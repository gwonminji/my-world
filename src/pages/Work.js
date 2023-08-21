import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import Visual from '@components/Visual';
import Marquee from '@components/Marquee';
import Modal from '@components/Modal';
import Title from '@components/Title';

import data from '@stores/workList';

import styles from "@styles/pages/work.module.scss";

export default function Work(){
    const visualText = ["three", "two", "one"]

    const filters = ["all", "1", "2", "3"]

    // const data = {
    //     items: [
    //         {
    //             id: 1,
    //             cate: "1",
    //             img: "https://m.media-amazon.com/images/I/61icbTpCVgL.jpg",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 2,
    //             cate: "2",
    //             img: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2t8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=200&q=75",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }                
    //         },
    //         {
    //             id: 3,
    //             cate: "1",
    //             img: "https://media.istockphoto.com/id/640970604/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%8B%A4-%EC%84%B8%EB%A1%9C-%EC%82%AC%EC%A7%84-%EC%9D%BC%EC%B6%9C.jpg?s=170667a&w=0&k=20&c=z0FzfG7OR3s17v1sNIp7j1eotJwK-pSRKwosUJS_35E=",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 4,
    //             cate: "3",
    //             img: "https://img.freepik.com/premium-vector/summer-background-layout-banners-design-horizontal-poster-greeting-card-header_16148-1225.jpg",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 5,
    //             cate: "2",
    //             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJz5aO6vGK9JHCYgmOoSg0I2QgzgCFFz1rtg&usqp=CAU",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 6,
    //             cate: "1",
    //             img: "https://watermark.lovepik.com/photo/20211208/large/lovepik-vertical-shot-vertical-screen-country-road-green-picture_501582676.jpg",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 7,
    //             cate: "3",
    //             img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 8,
    //             cate: "3",
    //             img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 9,
    //             cate: "2",
    //             img: "https://images.unsplash.com/photo-1630396592772-649470e66096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=75",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         },
    //         {
    //             id: 10,
    //             cate: "1",
    //             img: "https://pbs.twimg.com/media/EFHNcJQUcAI_acX.jpg",
    //             year: "0000",
    //             title: "title",
    //             text: "text",
    //             details: {
    //                 text: "detail-text"
    //             }
    //         }
    //     ]
    // };

    const [displayData, setDisplayData] = useState(data.items);
    const [active, setActive] = useState("all");

    useEffect(() => {
        const cateId = sessionStorage.getItem("cateId")
        if(cateId === null || cateId === "undefined"){
            return;
        }else{
            filterHandler(cateId);
            sessionStorage.removeItem("cateId")
        }
    }, [])

    const filterHandler = (cate) => {
        if(cate === active) return;
        setActive(cate);
        setDisplayData([]);

        if (cate === "all") {
            setDisplayData(data.items);
            return;
        }

        const filteredData = data.items.filter(
            (item) => item.cate === cate
        );
    
        setTimeout(() => {
            setDisplayData(filteredData);
        }, 400);
    }

    const setCateId = () => {
        sessionStorage.setItem("cateId", active);
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [idx, setIdx] = useState(null);

    const modalHandler = (e) => {
        setModalOpen(!modalOpen);
        setIdx(e.target.id);
    }

    return(
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
                            delay: 0.25
                        }
                    }}
                >
                    <Title title="title2" />
                    <div className={styles.filter}>
                    {
                        filters.map((item, i) => (
                            <motion.button 
                                key={i}
                                className={active === item ? styles.active : ""}
                                onClick={() => filterHandler(item)}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.1
                                    }
                                }}
                                whileTap={{ scale: 0.9 }}
                                title={item}
                            >
                            {item}
                            </motion.button>
                        ))
                    }
                    </div>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 767: 2, 1023: 3}}
                    >
                        <Masonry className={styles.list}>
                            {/* <AnimatePresence> */}
                                {
                                    displayData.map((item, i) => (
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
                                                    src={item.img}
                                                    className={styles.img}
                                                />
                                            </div>
                                            <motion.div 
                                                className={styles["text-box"]}
                                                initial={{ opacity: 0 }}
                                                whileHover={{ 
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.25
                                                    }
                                                }}
                                            >
                                                <strong>{item.title}</strong>
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
                                                <Link
                                                    // to={{
                                                    //     pathname: `/work/${item.id}`,
                                                    //     state: {
                                                    //         data: item
                                                    //     }
                                                    // }}
                                                    to={`/work/${item.id}`}
                                                    state={{data: item}}
                                                    title="more"
                                                    onClick={setCateId}
                                                >
                                                    <motion.span
                                                        whileHover={{ 
                                                            scale: 1.1,
                                                            transition: {
                                                                duration: 0.25
                                                            } 
                                                        }}
                                                        // onClick={modalHandler}
                                                    >
                                                        more
                                                    </motion.span>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    ))
                                }
                            {/* </AnimatePresence>                             */}
                        </Masonry>  
                    </ResponsiveMasonry>                      
                </motion.div>
            </section>
            <Marquee />
            {
                modalOpen && <Modal modalHandler={modalHandler} idx={idx}/>
            }
        </motion.main>
    )
}