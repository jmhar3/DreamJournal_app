import settings from '../../images/settings.png';
import { useState } from 'react';

const AccountSettings = () => {
    const [accountMenu, setAccount] = useState(false)
    const showAccountMenu = () => setAccount(true);
    const hideAccount = () => setAccount(false);

    async function signOut(d) {
        fetch("http://localhost:3000/login", {
            method: 'post',
            headers: {
                 'content-type': 'application/json',
                 'accept': 'application/json'
            }
        })
        .then(res => {
            localStorage.clear();
            window.location.reload();
        })
    }

    return (
        <div id="account-settings" onMouseLeave={hideAccount} >
            <button
                style={{ visibility: (accountMenu ? 'visible' : 'hidden') }}
                onClick={signOut}
            >
                Sign Out
            </button><br/>
            <button
                className="menu-icon"
            >
                <img src={settings}
                alt="account"
                onMouseOver={showAccountMenu}
                style={{ opacity: (accountMenu ? '0.8' : '1') }}
                />
            </button>
        </div>
    )
}

export default AccountSettings;