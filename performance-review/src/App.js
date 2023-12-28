/**
 * This is the main component for the application.
 * It handles user signup, login, and dashboard rendering.
 * Users can enter a username and password to sign up or log in.
 * Upon successful login, the dashboard is displayed, and users can log out.
 *
 * @component
 * @returns {JSX.Element} - The root component of the application.
 */

import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { FaUserCircle } from 'react-icons/fa';



function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState(
    'Password should be at least 8 characters long'
  );
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(prevState => !prevState);
  };




  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setMessage('Signup successful. You can now log in.');
      } else {
        setMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setLoggedIn(true);
        setMessage('Login successful');
      } else {
        setMessage('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordRequirements('Password should be at least 8 characters long');
    } else {
      setPasswordRequirements(''); // Clear the message if the password is long enough.
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
  };
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme} ${showUserInfo ? 'show-user-info' : ''}`}>
      <h1>Signup and Login</h1>
      {loggedIn ? (
      <>
        <button className="profile-icon" onClick={toggleUserInfo}>
          <FaUserCircle size={30} />
        </button>


        {showUserInfo && (
          <div className="user-info-popup">
            <p>Username: {username}</p>
            <button onClick={toggleUserInfo}>Close</button>
          </div>
        )}

        <Dashboard username={username} onLogout={handleLogout} />
      </>
    ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p>{passwordRequirements}</p>
          <button onClick={handleSignup}>Signup</button>
          <button onClick={handleLogin}>Login</button>
          <p>{message}</p>

        </div>

      )}
      <label className="theme-switch" htmlFor="checkbox">
    <input
      type="checkbox"
      id="checkbox"
      onChange={toggleTheme}
      checked={theme === 'light'}
    />
    <div className="slider round"></div>
  </label>
      {/* Bottom Banner */}
      <footer className="bottom-banner">
        <div className="contact-info">
          <p>Contact us at: contact@email.com</p>
        </div>
        <div className="group-members">
          <p>Members: Fahim, Adrian, Arooz, Mamun, Libin</p>
        </div>
      </footer>
    </div>
  );

}

export default App;
