import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home.js';
import Nav from './containers/nav.js';
import './css/App.css';
import './css/home.css';
import './css/nav.css';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Home />
        {/* <Route exact path="/" component={Home} /> */}
      </main>
    </Router>
  );
}

export default App;