const SignUp = () => {
    return (
        <form id="sign-up">
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm password" placeholder="Confirm Password" />
            <input type="submit" value="Lets go!" />
        </form>
    )
}
  
export default SignUp;