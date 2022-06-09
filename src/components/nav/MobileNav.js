import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import menu from "../../images/health.png";
import home from "../../images/world.png";
import goal from "../../images/to-do.png";
import note from "../../images/notes.png";
import finance from "../../images/box.png";

const Nav = () => {
  const [trackers, setTrackers] = useState(false);
  
  const menuToggle = useCallback(() => {
    setTrackers(!trackers);
  }, [setTrackers]);

  const hideTrackers = useCallback(() => {
    setTrackers(false);
  }, [setTrackers]);

  if (!localStorage.getItem("jwt")) {
    return (
      <header className="mobile">
        <nav onMouseLeave={hideTrackers}>
          <Link to="/" className="menu-icon">
            <img src={home} alt="home" />
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <div id="nav">
        <nav>
          <span
            className="menu-icon"
            onClick={menuToggle}
            style={{ opacity: trackers ? "0.8" : "1", cursor: "pointer" }}
          >
            <img src={menu} alt="menu" />
          </span>
          <Link
            to="/dashboard"
            className="menu-icon"
            onClick={hideTrackers}
            style={{ visibility: trackers ? "visible" : "hidden" }}
          >
            <img src={home} alt="home" />
          </Link>
          <Link
            to="/goals/new"
            className="menu-icon"
            onClick={hideTrackers}
            style={{ visibility: trackers ? "visible" : "hidden" }}
          >
            <img src={goal} alt="new goal" />
          </Link>
          <Link
            to="/notes/new"
            className="menu-icon"
            onClick={hideTrackers}
            style={{ visibility: trackers ? "visible" : "hidden" }}
          >
            <img src={note} alt="new note" />
          </Link>
          <Link
            to="/transactions/new"
            className="menu-icon"
            onClick={hideTrackers}
            style={{ visibility: trackers ? "visible" : "hidden" }}
          >
            <img src={finance} alt="new transaction" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
