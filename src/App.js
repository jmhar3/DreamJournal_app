import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Account from './components/Account.js';
import Dashboard from './pages/Dashboard.js';
import FinancePage from './pages/FinancePage.js';
import GoalPage from './pages/GoalPage.js';
import NotePage from './pages/NotePage.js';
import Nav from './components/Nav.js';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/home.css';
import './css/nav.css';
import './css/login.css';
import './css/account.css';
import './css/dashboard.css';
import './css/goals.css';
import './css/notes.css';

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <Router>
      <Nav />
      <Account />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financepage" element={<FinancePage />} />
        <Route path="/goalpage" element={<GoalPage />} />
        <Route path="/notepage" element={<NotePage />} />
      </Routes>
    </Router>
  );
}

export default App;