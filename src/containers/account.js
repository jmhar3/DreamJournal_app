import { Link } from "react-router-dom";
import image from '../images/stretching.png';

const Account = () => {
    function hideAccount(e) {
        e.preventDefault();
        const account = document.getElementById('account');
        account.style.display = 'none';
    }

    return (
        <div id="account" onClick={hideAccount} >
            <section>
                <img src={image} alt="profile pic"/>
                <h2>Jessica Hackerman</h2>
                <Link to="/updatedetails" class="button">Update Details</Link>
                <Link to="/deleteaccount" class="button">Delete Account</Link>
                <Link to="/signout" class="button">Sign Out</Link>
            </section>
        </div>
    )
}

export default Account;