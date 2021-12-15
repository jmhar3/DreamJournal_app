import { Link } from "react-router-dom";
import dashboard from '../images/DJ-Dashboard.png';
import goal from '../images/DJ-Goal.png';
import note from '../images/DJ-Note.png';
import finance from '../images/DJ-Transaction.png';

const Home = () => {
  return (
    <div id="homepage">
      <section id="hp-first">
        <h1>Get your sh*t together</h1>
      </section>
      <div class="light">
        <section id="hp-second">
          <Link to="/login" class="button">Get Started</Link>
        </section>
        <section id="hp-third">
          <div className="window">
            <section>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <img src={note} alt="Dashboard" />
          </div>
        </section>
      </div>
      <section id="hp-fourth">
          <div className="window">
            <section>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <img src={dashboard} alt="Goal Form Page" />
          </div>
      </section>
    </div>
  )
}

export default Home;