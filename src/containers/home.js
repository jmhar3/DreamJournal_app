import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/" class="home-button">Dream Journal</Link>
      <Link to="/login" class="button">Sign In</Link>
      <section class="homepage">
        <h1>Get your sh*t together</h1>
        <Link to="/login" class="button">Get Started</Link>
      </section>
    </div>
  )
}

export default Home;