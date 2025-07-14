'use client';
import React from 'react';


const networkDevices = [
  { id: 1, name: 'Router-01', status: 'Online', ip: '10.0.0.1', uptime: '99.9%' },
  { id: 2, name: 'Switch-01', status: 'Online', ip: '10.0.0.2', uptime: '99.7%' },
  { id: 3, name: 'Firewall-01', status: 'Offline', ip: '10.0.0.3', uptime: '0%' },
  { id: 4, name: 'Access Point 1', status: 'Online', ip: '10.0.0.4', uptime: '98.6%' },
];

export default function MonitoringPage() {
  return (
    <div className="monitor-content">
      <h1>Network Monitoring</h1>
      <p>Live status of network devices and infrastructure.</p>

      <div className="network-summary">
        <div className="summary-card"> Uptime Avg: <strong>99.3%</strong></div>
        <div className="summary-card"> Packet Loss: <strong>0.2%</strong></div>
        <div className="summary-card"> Latency: <strong>12ms</strong></div>
      </div>

      <div className="devices-grid">
        {networkDevices.map(device => (
          <div
            key={device.id}
            className={`device-card ${device.status.toLowerCase()}`}
          >
            <h3>{device.name}</h3>
            <p><strong>Status:</strong> <span>{device.status}</span></p>
            <p><strong>IP:</strong> {device.ip}</p>
            <p><strong>Uptime:</strong> {device.uptime}</p>
            <div className="device-actions">
              <button className="btn-primary">Ping</button>
              <button className="btn-secondary">Logs</button>
              {device.status === 'Online' && (
                <button className="btn-warn">Restart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
