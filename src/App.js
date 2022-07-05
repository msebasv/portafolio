import React from "react";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;