'use client';
import React from 'react';


const users = [
  { id: 1, name: 'Prima Keza', role: 'Trainee', email: 'prima@company.com', status: 'Active' },
  { id: 2, name: 'Alex Doe', role: 'Facilitator', email: 'alex@company.com', status: 'Inactive' },
  { id: 3, name: 'Linda Smith', role: 'Trainee', email: 'linda@company.com', status: 'Active' },
  { id: 4, name: 'Brian Johnson', role: 'Manager', email: 'brian@company.com', status: 'Active' },
];

export default function UserPage() {
  return (
    <div className="user-container">
      <h1>Users</h1>
      <p>Manage user accounts and their roles in the system.</p>

      <div className="user-table">
        <div className="user-header">
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {users.map(user => (
          <div key={user.id} className="user-row">
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.role}</span>
            <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
            <span className="actions">
              <button className="btn-primary">Edit</button>
              <button className="btn-danger">Remove</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
