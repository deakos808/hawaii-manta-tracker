import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <header>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Manta ID
        </div>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/import">Import Photos</Link>
        </nav>
      </header>
      <main>
        <h1>Welcome to Hawaii Manta Tracker App</h1>
        <p>This is a test update to confirm everything is synced properly.</p>
      </main>
    </div>
  );
}
