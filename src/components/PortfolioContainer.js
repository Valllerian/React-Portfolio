import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/MainPages/AboutMe";
import Resume from "./pages/MainPages/Resume";
import Portfolio from "./pages/Project/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/AddOns/Footer.js";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
