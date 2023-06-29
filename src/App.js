import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer"

import Home from "@pages/Home";
import Sub1 from "@pages/Sub1";
import Sub2 from "@pages/Sub2";
import Sub3 from "@pages/Sub3";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sub1" element={<Sub1 />}/>
          <Route path="/sub2" element={<Sub2 />}/>
          <Route path="/sub3" element={<Sub3 />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
