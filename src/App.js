// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Sub from "./pages/Sub";

import { Reset } from "styled-reset";
import "./App.css";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sub" element={<Sub />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
