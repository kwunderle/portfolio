import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Body from "./Components/body";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './Styles/main.css';
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;