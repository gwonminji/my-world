import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Header from "@components/Header";
import Footer from "@components/Footer";
// import SlideMenu from "@components/SlideMenu";

import Home from "@pages/Home";
import About from "@pages/About";
import Work from "@pages/Work";
import Detail from "@pages/Detail";
import Contact from "@pages/Contact";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@styles/app.scss";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    text-decoration: none;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea,
  select,
  button{
      font-family: 'Pretendard', sans-serif;
  }
`;

//모바일에서 브라우저 주소창, 하단 버튼영역을 고려한 전체높이 설정
let vh = window.innerHeight * 0.01; //innerHeight : 실질적으로 브라우저에서 보이는 높이

document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
function App() {
  return (
    <div className="wrap">
      <GlobalStyles />
      <Header />
      {/* <SlideMenu /> */}
      <AnimatePresence>
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
