import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";

const SignIn = () => {

    const {register, handleSubmit} = useForm();

    async function onSubmit(d) {
        fetch("http://localhost:3000/login", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            },
            body: JSON.stringify({
                email: `${d.email}`,
                password: `${d.password}`
            })
        })
        .then(res => res.json())
        .then(res => localStorage.setItem('jwt', res.token))
    }
    
    function loggedIn() {
        if (localStorage.getItem('jwt')) {
            <Navigate to="/dashboard" replace={true} />
        }
    }

    return (
        <div>
            {loggedIn()}
            <form id="sign-in" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("email")} placeholder="Email" />
                <input type="password" {...register("password")} placeholder="Password" />
                <input type="submit" value="Lets go!" />
            </form>
        </div>
    )
}

export default SignIn;