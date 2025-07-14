'use client';
import React, { useState } from 'react';
import { FaDownload, FaUpload } from 'react-icons/fa';


export default function ReportPage() {
  const [reports, setReports] = useState([
    { id: 1, title: 'Monthly Server Uptime', date: '2025-07-01', type: 'PDF' },
    { id: 2, title: 'Incident Report - June', date: '2025-07-05', type: 'DOC' },
    { id: 3, title: 'User Activity Summary', date: '2025-07-10', type: 'PDF' },
    { id: 4, title: 'Network Health Overview', date: '2025-07-13', type: 'CSV' },
  ]);

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newReport, setNewReport] = useState({ title: '', date: '', type: 'PDF' });

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType ? report.type === filterType : true;
    return matchesSearch && matchesType;
  });

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newReport.title || !newReport.date) return;

    const newItem = {
      id: reports.length + 1,
      ...newReport,
    };
    setReports([...reports, newItem]);
    setShowModal(false);
    setNewReport({ title: '', date: '', type: 'PDF' });
  };

  return (
    <div className="page-content">
      <h1>Reports</h1>
      <p>Access and download system reports.</p>

      <div className="report-controls">
        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="PDF">PDF</option>
          <option value="DOC">DOC</option>
          <option value="CSV">CSV</option>
        </select>
        <button className="btn-upload" onClick={() => setShowModal(true)}>
          <FaUpload /> Upload New Report
        </button>
      </div>

      <div className="report-grid">
        {filteredReports.length === 0 ? (
          <p className="no-reports">No reports found.</p>
        ) : (
          filteredReports.map(report => (
            <div key={report.id} className="report-card">
              <h3>{report.title}</h3>
              <p><strong>Date:</strong> {report.date}</p>
              <p><strong>Type:</strong> {report.type}</p>
              <button className="btn-download">
                <FaDownload /> Download
              </button>
            </div>
          ))
        )}
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Upload New Report</h2>
            <form onSubmit={handleUpload}>
              <input
                type="text"
                placeholder="Report Title"
                value={newReport.title}
                onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
                required
              />
              <input
                type="date"
                value={newReport.date}
                onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
                required
              />
              <select
                value={newReport.type}
                onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
              >
                <option value="PDF">PDF</option>
                <option value="DOC">DOC</option>
                <option value="CSV">CSV</option>
              </select>
              <div className="modal-actions">
                <button type="submit" className="btn-upload">Submit</button>
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
