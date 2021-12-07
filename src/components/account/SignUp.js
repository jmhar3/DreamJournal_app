import React, { useState } from "react";

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const emptyFields = credentials.name === "" || credentials.email === "" || credentials.password === "" || credentials.confirmPassword === "";

    function onSubmit() {
        fetch("http://localhost:3000/signup", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.password_confirmation
            })
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('jwt', res.token)
            localStorage.setItem('theme', "pink")
            window.location.reload();
        })
    }

    return (
        <form id="sign-up" onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
            />
            <input type="submit" value="Lets go!" style={{
                color: (emptyFields ? 'var(--bold)' : 'var(--light-mid)'),
                backgroundColor: (emptyFields ? 'var(--light-mid)' : 'var(--bold)')
            }} />
        </form>
    )
}
  
export default SignUp;