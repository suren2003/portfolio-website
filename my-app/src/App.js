import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

const App = () => {
  const [activePage, setActivePage] = useState('Home'); // Track the current page

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar setActivePage={setActivePage} />
      <main>{renderContent()}</main>
    </div>
  );
};

export default App;
