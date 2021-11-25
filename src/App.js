import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home.js';
import Login from './containers/login.js';
import Account from './containers/account.js';
import Dashboard from './containers/dashboard.js';
import NewGoal from './containers/newGoal.js';
import Nav from './containers/nav.js';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/home.css';
import './css/nav.css';
import './css/login.css';
import './css/account.css';
import './css/dashboard.css';
import './css/new-goal.css';

function App() {
  return (
    <Router>
      <Nav />
      <Account />
      <NewGoal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;