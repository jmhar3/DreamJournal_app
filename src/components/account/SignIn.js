import React, { useState } from "react";

const SignIn = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    
    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const emptyFields = credentials.email === "" || credentials.password === "";

    function onSubmit(e) {
        console.log(credentials)
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            },
            body: JSON.stringify({
                email: `${credentials.email}`,
                password: `${credentials.password}`
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.token !== undefined) {
                localStorage.setItem('jwt', res.token)
                localStorage.setItem('theme', "pink")
            }
            window.location.reload();
        })
    }

    return (
        <div>
            <form id="sign-in" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Lets go!" style={{
                    color: (emptyFields ? 'var(--bold)' : 'var(--light-mid)'),
                    backgroundColor: (emptyFields ? 'var(--light-mid)' : 'var(--bold)')
                }} />
            </form>
        </div>
    )
}

export default SignIn;