import React from 'react';
import { IoMdNotifications } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";


const navbar = () => {
  return (
    <header className="header-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search servers,tickets,..." />
      </div>
      <div className="header-icons">
        <span className="icon-badge"><IoMdNotifications /><span className="badge">2</span></span>
        <span className="icon-badge"><FiMessageCircle /></span>
        <div className="user-profile">
          <span className="user-avatar">P</span>
          <div>
            <div className="user-name">Prima technician</div>
            <div className="user-role">IT Oprerator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default navbar;