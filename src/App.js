import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AdminPG from './Adminpg.js';
import './index.css';
import Register from './register.js'; 

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body, #root {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          color: white;
          overflow-x: hidden;
          min-height: 100vh;
          background: url('https://i.pinimg.com/736x/d4/d9/d0/d4d9d0abaa38c851a514faab87926096.jpg') center/cover no-repeat fixed;
          z-index: -2;
         overflow: hidden;
          
      

        header {
          padding: 40px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
        }

        nav a {
          color: rgba(255,255,255,0.9);
          margin: 0 15px;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #8fff8f;
        }

        .signup-btn {
          background: white;
          color: #5a2ae5;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-btn:hover {
          background: #5a2ae5;
          color: white;
        }

        main {
          padding: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .text-content {
          max-width: 500px;
        }

        .tagline {
          color: #8fff8f;
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }

        .headline {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.85);
        }

        .cards {
          position: relative;
          width: 400px;
          height: 300px;
        }

        .card {
          position: absolute;
          width: 320px;
          height: 180px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          padding: 20px;
          color: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s ease;
        }

        .card:first-child {
          top: 0;
          left: 40px;
          transform: rotate(-5deg);
        }

        .card:last-child {
          top: 100px;
          left: 0;
          transform: rotate(10deg);
        }

        .card h4 {
          font-size: 1rem;
          margin: 20px 0 10px;
        }

        .card p {
          font-size: 0.9rem;
          margin: 4px 0;
        }

        .fot1 {
          text-align: center;
          padding: 20px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
        }

        @media (max-width: 768px) {
          main {
            flex-direction: column;
            align-items: flex-start;
          }

          .cards {
            margin-top: 40px;
          }
        }
      `}</style>

      <header>
        <div className="logo">cashfly</div>
        <nav>
          <a href="#">About</a>
          <a  onClick={() => navigate('/register')}>Sign up</a>

          <a href="#">Product</a>
          <a href="#">Pricing</a>
        </nav>
      </header>

      <main>
        <div className="text-content">
          <div className="tagline">Start saving your money</div>
          <div className="headline">Payments have never been easier</div>
          <div className="description">
            Discover the easiest way to manage your personal finances.
            Save, analyze, invest, withdraw, send and receive money all over the world with no limits!
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h4>Card Holder: Joshua Cash</h4>
            <p>Card Number: 3516 8643 7614 9242</p>
            <p>Expires: 11/27</p>
          </div>
          <div className="card">
            <h4>Card Holder: Sarah Gold</h4>
            <p>Card Number: 5136 7541 0873 0029</p>
            <p>Expires: 09/24</p>
          </div>
        </div>
      </main>

      <footer className="fot1">
        &copy; 2025 Cashfly Digital Bank
      </footer>
    </>
  );
}

  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPG />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}


export default App;