import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";
import SlideMenu from "@components/SlideMenu";

import Home from "@pages/Home";
import About from "@pages/About";
import Work from "@pages/Work";
import Contact from "@pages/Contact";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@styles/app.scss"

const GlobalStyles = createGlobalStyle`
  ${reset}
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
function App() {
  return (
    <div className="wrap">
      <GlobalStyles />
      <Header />
      <SlideMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
