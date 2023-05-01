import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageSingleMovie from "./components/PageSingleMovie";
import PageAbout from "./components/PageAbout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" exact element={<PageAbout />} />
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/" exact element={<PageHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
