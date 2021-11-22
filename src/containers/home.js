import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homepage">
      <Link to="/login" class="sign-in-button button">Sign In</Link>
      <section id="hp-first">
        <h1>Get your sh*t together</h1>
      </section>
      <div class="light">
        <section id="hp-second">
          <Link to="/login" class="button">Get Started</Link>
        </section>
        <section id="hp-third">
          <h2>Manage your goals, notes, finances + so much more...</h2>
        </section>
      </div>
      <section id="hp-fourth">
      </section>
    </div>
  )
}

export default Home;