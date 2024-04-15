import { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import styles from "@styles/components/home/section2.module.scss";

const content = [
  "안녕하세요.",
  "좋아하는 일을 즐기며 UI 개발을 하는 경력 웹퍼블리셔 권민지입니다.",
  "다양한 프로젝트의 경험을 바탕으로 웹퍼블리싱에 역량과 경험을 갖추고 있어요.",
  "어느 해상도에서도 잘 보이는 반응형 구현, 웹 접근성과 웹 표준을 고려한 웹페이지를 탄탄한 코드로 그려냅니다.",
  "Vue나 React와 같은 프레임워크 환경에서 컴포넌트 단위의 마크업 개발을 능숙하게 할 수 있어요.",
  "함께 할 동료들과의 원활한 협업을 중요하게 생각하며,",
  "서로의 의도를 이해하고 존중하여 함께 좋은 결과물을 만들어 내는 것을 지향합니다.",
];

const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className={styles["text-container"]} ref={contentRef}>
      <motion.span
        className={styles["highlighted-text"]}
        style={{ clipPath: clipPathVal }}
        data-text={content}
      />
      <span className={styles["static-text"]}>{content}</span>
    </span>
  );
};
export default function Section2() {
  return (
    <section className={styles.section}>
      <div className="inner">
        <div className={styles.outer}>
          <div className={styles.inner}>
            <p>
              {content.map((item) => (
                <ContentLine key={item} content={item} />
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
