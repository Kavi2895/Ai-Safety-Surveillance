
// ================================
// FILE: src/App.js
// AI-BASED SAFETY SURVEILLANCE SYSTEM
// COMPLETE FRONTEND CODE
// ================================

import Navbar from './components/Navbar';
import CameraFeed from './components/CameraFeed';
import AlertPanel from './components/AlertPanel';
import Dashboard from './components/Dashboard';
import './index.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <CameraFeed />
      <AlertPanel />
    </div>
  );
}


// ================================
// FILE: src/index.js
// REACT ENTRY POINT
// ================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ================================
// FILE: src/index.css
// GLOBAL STYLES
// ================================

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
}

nav {
  background: #1e3a8a;
  color: white;
  padding: 20px;
  text-align: center;
}

.card {
  background: white;
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}


// ================================
// FILE: src/components/Navbar.js
// NAVIGATION BAR
// ================================

export default function Navbar() {
  return (
    <nav>
      <h1>AI SAFETY SURVEILLANCE SYSTEM</h1>
    </nav>
  );
}


// ================================
// FILE: src/components/Dashboard.js
// DASHBOARD COMPONENT
// ================================

export default function Dashboard() {
  return (
    <div className="card">
      <h2>DASHBOARD</h2>
      <p>AI Model Status: Running</p>
      <p>Cameras Online: 4</p>
      <p>Today's Alerts: 2</p>
    </div>
  );
}


// ================================
// FILE: src/components/CameraFeed.js
// LIVE CAMERA FEED
// ================================

export default function CameraFeed() {
  return (
    <div className="card">
      <h2>LIVE CAMERA FEED</h2>
      <img
        src="https://via.placeholder.com/700x350?text=Live+Camera+Feed"
        alt="Live Camera"
      />
    </div>
  );
}


// ================================
// FILE: src/components/AlertPanel.js
// ALERT PANEL
// ================================

export default function AlertPanel() {
  return (
    <div className="card">
      <h2>RECENT ALERTS</h2>
      <p>⚠ Worker without helmet detected</p>
      <p>⚠ Restricted area entry detected</p>
      <button>Send Emergency Alert</button>
    </div>
  );
}
