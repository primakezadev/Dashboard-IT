'use client';
import { useState } from 'react';
import '../styles/login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Login failed');
      }

      const { token, user } = result.data;

      // Save token and user info
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');
      window.location.href = '/dashboard';

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className='left-section'> 
  <div className="left-sections">
    <h1>Welcome to Klab Program Manager</h1>
     </div>
     <div className='section-descr'>
       <p>
      Manage your programs, track attendance, submit projects, and collaborate — all in one place.
        </p>
      <p>
      Secure, easy to use, and built to support your role, whether you're a manager, facilitator, or trainee.
      </p>
     </div>
     </div>


      <div className="right-section">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Your email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              {' '}Remember me
            </label>
          </div>

          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
