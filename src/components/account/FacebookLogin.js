import facebook from '../../images/facebook.png';

const FacebookLogin = () => {
    function facebookLogin() {
        fetch("http://localhost:3000/auth/facebook", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('jwt', res.token)
            localStorage.setItem('theme', "pink")
            window.location.reload();
        })
    }

    return (
        <section id="socials">
            <img src={facebook} alt="facebook login" onClick={facebookLogin} />
        </section>
    )
}

export default FacebookLogin;
    