import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home.js';
import Login from './containers/login.js';
import Dashboard from './containers/dashboard.js';
import Nav from './containers/nav.js';
import './css/App.css';
import './css/home.css';
import './css/nav.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;