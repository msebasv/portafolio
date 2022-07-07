import React from "react";

import Navbar from "../../components/Navbar";

import { Outlet } from "react-router-dom";

import SocialMedia from "../../components/SocialMedia";

import "./index.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <Outlet />
        <SocialMedia />
      </main>
    </div>
  );
};

export default Layout;
