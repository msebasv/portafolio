import React from "react";

import Navbar from "../../components/Navbar";

import { Outlet } from "react-router-dom";

import "./index.css";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
