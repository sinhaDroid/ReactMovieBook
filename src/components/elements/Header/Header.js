import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="rmb-header">
      <div className="rmb-header-content">
        <img className="rmb-logo" src="./images/reactMovie_logo.png" alt="rmb-logo" />
        <img className="rmb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
      </div>
    </div>
  )
}

export default Header;