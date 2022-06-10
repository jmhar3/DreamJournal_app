import settings from "../../images/settings.png";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showAccountMenu = () => setIsMenuOpen(true);
  const hideAccount = () => setIsMenuOpen(false);

  const toggleAccountMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();

  const signOut = useCallback(async () => {
    localStorage.removeItem("jwt");
    navigate("/", { replace: true });
    window.location.reload();
  }, [localStorage, navigate]);

  if (
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <div id="account-settings">
        <button
          style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
          onClick={signOut}
        >
          Sign Out
        </button>
        <br />
        <button className="menu-icon">
          <img
            src={settings}
            alt="account"
            onClick={toggleAccountMenu}
            style={{ opacity: isMenuOpen ? "0.8" : "1" }}
          />
        </button>
      </div>
    );
  } else {
    return (
      <div id="account-settings" onMouseLeave={hideAccount}>
        <button
          style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
          onClick={signOut}
        >
          Sign Out
        </button>
        <br />
        <button className="menu-icon">
          <img
            src={settings}
            alt="account"
            onMouseOver={showAccountMenu}
            style={{ opacity: isMenuOpen ? "0.8" : "1" }}
          />
        </button>
      </div>
    );
  }
};

export default AccountSettings;
