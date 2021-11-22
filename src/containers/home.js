import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/" class="home-button">Dream Journal</Link>
      <Link to="/" class="home-button">Sign In</Link>
      <section>
        <h1>Get your sh*t together</h1>
        <Link to="/" class="button">Get Started</Link>
      </section>
    </div>
  )
}

export default Home;