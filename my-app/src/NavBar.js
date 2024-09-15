import React from 'react';

const NavBar = ({ setActivePage }) => {
  return (
    <nav>
      <button onClick={() => setActivePage('Home')}>Home</button>
      <button onClick={() => setActivePage('About')}>About</button>
    </nav>
  );
};

export default NavBar;
