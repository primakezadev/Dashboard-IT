'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { LuLayoutDashboard } from "react-icons/lu";
import { IoServerSharp, IoSettingsSharp } from "react-icons/io5";
import { FaBoxTissue, FaUser } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineModeNight } from "react-icons/md";

import { applyTheme, getSavedTheme } from "../utilis/Theme";


const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = getSavedTheme();
    setDarkMode(saved === 'dark');
    applyTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    applyTheme(newTheme);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo-icon">IT</span> Management
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/dashboard" className="nav-item active">
              <span><LuLayoutDashboard /></span> Dashboard
            </Link>
            <Link href="/dashboard/server" className="nav-item">
              <span><IoServerSharp /></span> Servers <span className="count">12</span>
            </Link>
          </li>

          <li>
            <Link href="/dashboard/ticket" className="nav-item">
              <span><FaBoxTissue /></span> Tickets <span className="count">46</span>
            </Link>
          </li>

          <li>
            <Link href="/dashboard/monitoring" className="nav-item">
              <span><GiNetworkBars /></span> Network Monitoring
            </Link>
          </li>

          <li>
            <Link href="/dashboard/user" className="nav-item">
              <span><FaUser /></span> Users
            </Link>
          </li>

          <li>
            <Link href="/dashboard/report" className="nav-item">
              <span><GoReport /></span> Reports <span className="count">89</span>
            </Link>
          </li>

          <li>
            <Link href="/dashboard/setting" className="nav-item">
              <span><IoSettingsSharp /></span> Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        <span><MdOutlineModeNight /> {darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
