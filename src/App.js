import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Account from './components/Account.js';
import Dashboard from './pages/Dashboard.js';
import NewGoal from './pages/GoalPage.js';
import NewNote from './pages/NotePage.js';
import Nav from './components/Nav.js';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/home.css';
import './css/nav.css';
import './css/login.css';
import './css/account.css';
import './css/dashboard.css';
import './css/new-goal.css';
import './css/new-note.css';

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
        <Route path="/newgoal" element={<NewGoal />} />
        <Route path="/newnote" element={<NewNote />} />
      </Routes>
    </Router>
  );
}

export default App;