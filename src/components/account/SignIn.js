import React, { useState, useCallback, useMemo } from "react";

const SignIn = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = useCallback((event) => {
        setCredentials((prevCredentials) => {
            return {...prevCredentials,
            [event.target.name]: event.target.value}
        })
    }, [setCredentials])

    const emptyFields = useMemo(() => {
     return credentials.email === "" || credentials.password === "";
    }, [credentials])

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/v1/login", {
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
            } else {
             // throw error
            }
            window.location.reload();
        })
    }, [credentials])

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