import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Nav from "./Components/nav";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Layout from "./Components/layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Mushroom from "./assets/mushroomWORKING3.svg";

function App() {
  console.log("App.js is loaded");
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      <Header />
      <Body />
      <Footer />
      <Mushroom width={500} height={500} />
    </>
  );
}

export default App;
