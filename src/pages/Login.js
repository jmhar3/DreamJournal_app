import { Link } from "react-router-dom";
import { useState } from 'react';
import SignIn from '../components/SignIn.js';
import SignUp from '../components/SignUp.js';
import image from '../images/stretching.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

const Login = ({ setToken }) => {

    const [toggleLogin, setToggleLogin] = useState(true)
    const showSignIn = () => setToggleLogin(false);
    const showSignUp = () => setToggleLogin(true);

    return (
        <div id="login">
            <section id="login-left">
                <div className="toggle-slider">
                    <button
                        className="toggle-button"
                        onClick={showSignUp}
                        style={{
                            background: (toggleLogin ? 'var(--bold)' : 'none'),
                            color: (toggleLogin ? 'var(--light-mid)' : 'var(--bold)')
                        }}
                    >
                        Sign In
                    </button>
                    <button
                        className="toggle-button"
                        onClick={showSignIn}
                        style={{
                            background: (toggleLogin ? 'none' : 'var(--bold)'),
                            color: (toggleLogin ? 'var(--bold)' : 'var(--light-mid)')
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                {toggleLogin ? <SignIn setToken={setToken} /> : <SignUp />}
                <p>Or sign in with...</p>
                <section id="socials">
                    <Link to="/twitter" className="social-icon"><img src={twitter} alt="twitter login" /></ Link>
                    <Link to="/github" className="social-icon"><img src={github} alt="github login" /></ Link>
                </section>
            </section>
            <section id="login-right">
                <img src={image} alt="" />
            </section>
        </div>
    )
}

export default Login;