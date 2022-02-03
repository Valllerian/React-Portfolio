import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // Renders Home page as line 9 default parameter is Home;
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    // If we have some other state then render About for About state';
    if (currentPage === 'About') {
      return <About />;
    }
    // render Blog for blog state;
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    // returns Contact regardless of the state;
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* We are passing current page parameter that is set up above depending on the state of the page; */}
      {/* Depending on our state we fill out our navbar with content  */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* renderPage function is being used and the content is being generated : if State is Home => Home + Contact is rendered; */}
      {renderPage()}
    </div>
  );
}
