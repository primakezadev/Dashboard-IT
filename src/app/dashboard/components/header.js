'use client';
import React from 'react';

import { LuLayoutDashboard } from "react-icons/lu";
import { IoServerSharp } from "react-icons/io5";
import { FaBoxTissue, FaUser } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";

export default function DashboardHome() {
  return (
    <div className="dashboard-container">
      
     
      <div className="dashboard-header">
        <h1>Welcome back, Prima! </h1>
        <p>Here’s what’s happening in your system today.</p>
      </div>

     
      <div className="card-grid">
        <Card icon={<LuLayoutDashboard />} label="Dashboard" value="Overview" />
        <Card icon={<IoServerSharp />} label="Servers" value="12 Online" />
        <Card icon={<FaBoxTissue />} label="Tickets" value="46 Open" />
        <Card icon={<GiNetworkBars />} label="Network" value="Stable" />
        <Card icon={<FaUser />} label="Users" value="128 Active" />
        <Card icon={<GoReport />} label="Reports" value="89 Total" />
      </div>

      
      <div className="card-grid">
        <ChartCard title="Server Load (This Week)" />
        <ChartCard title="Ticket Received" />
      </div>

     
      <div className="section">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          <li> Server <strong>Web01</strong> restarted by Admin</li>
          <li> Ticket #1042: Printer not working — <span style={{ color: 'blue' }}>Open</span></li>
          <li> New user <strong>John Doe</strong> added</li>
          <li> Backup completed for <strong>DB01</strong></li>
        </ul>
      </div>

     
      <div className="section">
        <h2>Quick Actions</h2>
        <div className="quick-actions">
          <button className="action-btn">Add Ticket</button>
          <button className="action-btn">Add Server</button>
          <button className="action-btn">Run Scan</button>
          <button className="action-btn">Download Report</button>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Card Component ---
const Card = ({ icon, label, value }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <div className="card-info">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  </div>
);

// --- Chart Placeholder ---
const ChartCard = ({ title }) => (
  <div className="chart-card">
    {title} (Chart Placeholder)
  </div>
);
