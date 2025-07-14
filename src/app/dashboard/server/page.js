'use client';
import React, { useState } from 'react';
import { MdOutlineOnlinePrediction } from "react-icons/md"
import { IoCloudOfflineSharp } from "react-icons/io5";


const initialServers = [
  { id: 1, name: 'Web01', status: 'Online', ip: '192.168.1.10', uptime: '4 days' },
  { id: 2, name: 'DB01', status: 'Offline', ip: '192.168.1.20', uptime: 'N/A' },
  { id: 3, name: 'Cache01', status: 'Online', ip: '192.168.1.30', uptime: '6 days' },
  { id: 4, name: 'Backup01', status: 'Online', ip: '192.168.1.40', uptime: '9 days' },
];

export default function ServerPage() {
  const [search, setSearch] = useState('');

  const filteredServers = initialServers.filter(server =>
    server.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = initialServers.length;
  const online = initialServers.filter(s => s.status === 'Online').length;
  const offline = total - online;

  return (
    <div className="page-content">
      <h1>Servers</h1>
      <p>Manage your servers and monitor their status.</p>

      
      <div className="server-top-bar">
        <input
          type="text"
          placeholder="Search servers..."
          className="server-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="server-stats">
          <span>Total: {total}</span>
          <span className="online"> <MdOutlineOnlinePrediction /> {online} Online</span>
          <span className="offline"> <IoCloudOfflineSharp />{offline} Offline</span>
        </div>
      </div>

     
      <div className="servers-grid">
        {filteredServers.map(server => (
          <div key={server.id} className={`server-card ${server.status === 'Online' ? 'online' : 'offline'}`}>
            <h3>{server.name}</h3>
            <p><strong>Status:</strong> {server.status}</p>
            <p><strong>IP:</strong> {server.ip}</p>
            <p><strong>Uptime:</strong> {server.uptime}</p>
            <div className="server-actions">
              <button className="btn-primary">Restart</button>
              <button className="btn-secondary">View Logs</button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="section">
        <h2>Recent Server Logs</h2>
        <ul className="activity-list">
          <li>[07:20] Backup01 completed full backup.</li>
          <li>[07:12] DB01 went offline unexpectedly.</li>
          <li>[06:55] Cache01 was updated.</li>
          <li>[06:00] Web01 restarted by admin.</li>
        </ul>
      </div>
    </div>
  );
}
