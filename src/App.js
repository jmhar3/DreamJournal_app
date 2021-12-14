import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import FinancePage from './pages/FinancePage.js';
import GoalPage from './pages/GoalPage.js';
import NotePad from './pages/NotePad.js';
import Nav from './components/Nav.js';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/colour_mode.css";
import './css/App.css';
import './css/home.css';
import './css/nav.css';
import './css/login.css';
import './css/dashboard.css';
import './css/goals.css';
import './css/notes.css';
import './css/transactions.css';

function App() {
  const auth = localStorage.getItem('jwt')
  const dashboard_nav = <Navigate replace to="/dashboard" />
  const login_nav = <Navigate replace to="/login" />

  return (
    <Router>
      <Nav />
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
        <Route path="/notes"
          element={!auth ? login_nav : <NotePad /> }
        />
        <Route path="/notes/new"
          element={!auth ? login_nav : <NotePad /> }
        />
        <Route path="/notes/:id"
          element={!auth ? login_nav : <NotePad /> }
        />
        <Route path="/notes/:id/edit"
          element={!auth ? login_nav : <NotePad /> }
        />
        <Route path="/transactions/new"
          element={!auth ? login_nav : <FinancePage /> }
        />
        <Route path="/goals"
          element={!auth ? login_nav : <GoalPage /> }
        />
        <Route path="/goals/new"
          element={!auth ? login_nav : <GoalPage /> }
        />
        <Route path="/goals/:id/edit"
          element={!auth ? login_nav : <GoalPage /> }
        />
      </Routes>
    </Router>
  );
}

export default App;