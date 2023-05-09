import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageSingleMovie from "./components/PageSingleMovie";
import PageAbout from "./components/PageAbout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/styles.scss";
import PageFavs from "./components/PageFavs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<PageAbout />} />
        <Route path="/favourites" element={<PageFavs />} />
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/" exact element={<PageHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
