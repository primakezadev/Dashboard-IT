// src/app/dashboard/components/sidebar.js
import React from 'react';
import Link from 'next/link';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoServerSharp } from "react-icons/io5";
import { FaBoxTissue } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";

const Sidebar = () => {
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
      <div className="sidebar-footer">
          <span><MdOutlineModeNight /> Dark Mode</span>
      </div>
    </aside>
  );
};

export default Sidebar;