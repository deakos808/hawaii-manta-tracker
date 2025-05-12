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
        <h1>Welcome to the Manta Ray Identification System</h1>
        <p>Track and identify manta rays through their unique ventral spot patterns.</p>
      </main>
    </div>
  );
}
