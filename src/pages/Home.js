import { Link } from "react-router-dom";
import dashboard from '../images/DJ-Dashboard.png';
import goal from '../images/DJ-Goal.png';
import note from '../images/DJ-Note.png';
import finance from '../images/DJ-Transaction.png';

const Home = () => {
  return (
    <div id="homepage">
      <section className="hp-first">
        <h1>Get your sh*t together</h1>
      </section>
      <div class="light">
        <section className="hp-second">
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
      <section className="hp-first">
          <div className="window">
            <section>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <img src={goal} alt="Dashboard" />
          </div>
      </section>
      <div class="light">
        <section className="hp-second">
          <div className="window">
            <section>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <img src={finance} alt="Dashboard" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;