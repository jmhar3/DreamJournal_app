import settings from '../../images/settings.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
    const [accountMenu, setAccount] = useState(false)
    const showAccountMenu = () => setAccount(true);
    const hideAccount = () => setAccount(false);

    const navigate = useNavigate();

    async function signOut() {
        localStorage.removeItem("jwt");
        navigate('/', { replace: true})
        window.location.reload();
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