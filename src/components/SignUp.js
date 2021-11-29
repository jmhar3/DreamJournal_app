import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {register, handleSubmit} = useForm();

    async function onSubmit(d) {
        fetch("http://localhost:3000/signup", {
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
        .then(res => console.log(res))
    }

    return (
        <form id="sign-up" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm password" placeholder="Confirm Password" />
            <input type="submit" value="Lets go!" />
        </form>
    )
}
  
export default SignUp;