import React from "react";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
