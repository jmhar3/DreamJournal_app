import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  const auth = localStorage.getItem('jwt')
  const dashboard_nav = <Navigate replace to="/dashboard" />
  const login_nav = <Navigate replace to="/login" />

  return (
    <Router>
      <Nav />
      <Account />
      <Routes>
        <Route path="/"
          element={ auth ? dashboard_nav : <Home />}
        />
        <Route path="/login"
          element={ auth ? dashboard_nav : <Login />}
        />
        <Route path="/dashboard"
          element={!auth ? login_nav : <Dashboard /> }
        />
        <Route path="/financepage"
          element={!auth ? login_nav : <FinancePage /> }
        />
        <Route path="/goalpage"
          element={!auth ? login_nav : <GoalPage /> }
        />
        <Route path="/notepad"
          element={ !auth ? login_nav : <NotePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;