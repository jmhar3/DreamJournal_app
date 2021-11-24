import { Link } from "react-router-dom";

const Account = () => {
    return (
        <div id="account">
            <section>
                <img src="https://placehold.it/"/>
                <h2>Jessica Hackerman</h2>
                <Link to="/updatedetails" class="button">Update Details</Link>
                <Link to="/deleteaccount" class="button">Delete Account</Link>
                <Link to="/signout" class="button">Sign Out</Link>
            </section>
        </div>
    )
}

export default Account;