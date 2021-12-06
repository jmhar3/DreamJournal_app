import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    async function onSubmit(d) {
        fetch("http://localhost:3000/signup", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            },
            body: JSON.stringify({
                name: `${d.name}`,
                email: `${d.email}`,
                password: `${d.password}`,
                password_confirmation: `${d.password_confirmation}`
            })
        })
        .then(res => res.json())
        .then(res => localStorage.setItem('jwt', res.token))
        navigate("/dashboard", { replace: true });
    }

    return (
        <form id="sign-up" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder="Name" />
            <input type="text" {...register("email")} placeholder="Email" />
            <input type="password" {...register("password")} placeholder="Password" />
            <input type="password" {...register("password_confirmation")} placeholder="Confirm Password" />
            <input type="submit" value="Lets go!" />
        </form>
    )
}
  
export default SignUp;