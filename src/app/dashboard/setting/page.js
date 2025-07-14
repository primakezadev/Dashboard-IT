'use client';
import React, { useState } from 'react';


export default function SettingsPage() {
  const [form, setForm] = useState({
    name: 'Prima Keza',
    email: 'prima@example.com',
    password: '',
    darkMode: false,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(' Settings saved successfully');
  };

  return (
    <div className="page-content">
      <h1>Settings</h1>
      <p>Manage your account and system preferences.</p>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Account Settings</h2>
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <h2>Preferences</h2>
          <label className="checkbox-row">
            <input type="checkbox" name="darkMode" checked={form.darkMode} onChange={handleChange} />
            Enable Dark Mode
          </label>
          <label className="checkbox-row">
            <input type="checkbox" name="notifications" checked={form.notifications} onChange={handleChange} />
            Enable Notifications
          </label>
        </div>

        <button type="submit" className="btn-save">Save Settings</button>
      </form>
    </div>
  );
}
