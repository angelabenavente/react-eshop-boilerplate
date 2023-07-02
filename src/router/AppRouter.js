import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar.js";
import { Footer } from "../components/static/Footer.js";
import { Navbar } from "../components/static/Navbar.js";
import { ContactPage } from "../components/views/ContactPage.js";
import { HomePage } from "../components/views/HomePage.js";
import "./appRouter.css";

const leftNavLinks = [
  { url: "/", name: "Home" },
  { url: "/contact-form", name: "Contact" },
];

const rightNavLinks = [
  { url: "/contact-form", name: "Contact" },
  { url: "/", name: "Home" },
];

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <div className="viewContainer">
          <Sidebar links={leftNavLinks} className={"leftSideBar"} />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact-form" element={<ContactPage />} />
          </Routes>
          <Sidebar links={rightNavLinks} className={"rightSideBar"} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
