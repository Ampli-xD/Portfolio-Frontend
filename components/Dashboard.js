import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Panel - Logo */}
      <div className="panel panel-left">
        <div className="logo-container">
          <i className="fas fa-code"></i>
          <span className="logo-text">Portfolio</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><i className="fas fa-home"></i> Home</li>
            <li><i className="fas fa-project-diagram"></i> Projects</li>
            <li><i className="fas fa-user"></i> About</li>
            <li><i className="fas fa-envelope"></i> Contact</li>
          </ul>
        </nav>
      </div>

      {/* Center Panel - Main Content */}
      <div className="panel panel-center">
        <header className="content-header">
          <h1 className="heading-xl">Dashboard</h1>
        </header>
        <main className="content-main">
          <div className="dashboard-grid">
            {/* Add your dashboard content here */}
            <div className="card card-glass">
              <h2>Welcome Back!</h2>
              <p>This is your creative space.</p>
            </div>
          </div>
        </main>
      </div>

      {/* Right Panel - Chat Interface */}
      <div className="panel panel-right">
        <div className="chat-header">
          <h2 className="heading-lg">Messages</h2>
        </div>
        <div className="chat-container">
          <div className="chat-messages">
            {/* Chat messages will go here */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
