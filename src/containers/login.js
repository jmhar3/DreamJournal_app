import { Link } from "react-router-dom";
import { useState } from 'react';
import SignIn from './signIn.js';
import SignUp from './signUp.js';
import image from '../images/stretching.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

const Login = () => {

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
                {toggleLogin ? <SignIn /> : <SignUp />}
                <p>Or sign in with...</p>
                <section id="socials">
                    <Link to="/twitter" className="social-icon"><img src={twitter} /></ Link>
                    <Link to="/github" className="social-icon"><img src={github} /></ Link>
                </section>
            </section>
            <section id="login-right">
                <img src={image} />
            </section>
        </div>
    )
}

export default Login;