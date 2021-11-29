import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const SignIn = ({ setToken }) => {

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

    // async function onSubmit(e, data) {
    //     // e.preventDefault();
    //     const token = await loginUser(data)
    //     // setToken(token);
    // }

    return (
        <form id="sign-in" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder="Email" />
            <input type="password" {...register("password")} placeholder="Password" />
            <input type="submit" value="Lets go!" />
        </form>
    )
}
  
export default SignIn;

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }