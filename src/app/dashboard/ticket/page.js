'use client';
import React, { useState } from 'react';
import { MdLockOpen } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";


const initialTickets = [
  { id: 101, subject: 'Printer not working', status: 'Open', priority: 'High' },
  { id: 102, subject: 'Wi-Fi disconnects randomly', status: 'Open', priority: 'Medium' },
  { id: 103, subject: 'Email login issues', status: 'closed', priority: 'Low' },
  { id: 104, subject: 'Blue screen on startup', status: 'Open', priority: 'High' },
];

export default function TicketPage() {
  const [search, setSearch] = useState('');

  const filteredTickets = initialTickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
    ticket.id.toString().includes(search)
  );

  const total = initialTickets.length;
  const open = initialTickets.filter(t => t.status === 'Open').length;
  const closed = total - open;

  return (
    <div className="page-content">
      <h1>Tickets</h1>
      <p>Track and manage all user-reported issues.</p>

     
      <div className="ticket-top-bar">
        <input
          type="text"
          placeholder="Search tickets..."
          className="ticket-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="ticket-stats">
          <span>Total: {total}</span>
          <span className="open"> <MdLockOpen />{open} Open</span>
          <span className="closed"> <FaRegWindowClose />{closed} Closed</span>
        </div>
      </div>

     
      <div className="tickets-grid">
        {filteredTickets.map(ticket => (
          <div key={ticket.id} className={`ticket-card ${ticket.status.toLowerCase()}`}>
            <h3>#{ticket.id}</h3>
            <p><strong>Subject:</strong> {ticket.subject}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <div className="ticket-actions">
              <button className="btn-primary">View</button>
              {ticket.status === 'Open' && <button className="btn-secondary">Resolve</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
