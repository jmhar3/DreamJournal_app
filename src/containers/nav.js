import { Link } from "react-router-dom";
import { useState } from 'react';
import home from '../images/world.png';
import calendar from '../images/calendar.png';
import account from '../images/files.png';
import newRecord from '../images/notes.png';
import goal from '../images/to-do.png';
import finance from '../images/box.png';

const Nav = () => {

    const [homeLabel, setHome] = useState(false)
    const showHome = () => setHome(true);
    const hideHome = () => setHome(false);

    const [calendarLabel, setCalendar] = useState(false)
    const showCalendar = () => setCalendar(true);
    const hideCalendar = () => setCalendar(false);

    const [accountLabel, setAccount] = useState(false)
    const showAccountLabel = () => setAccount(true);
    const hideAccount = () => setAccount(false);

    const [trackers, setTrackers] = useState(false)
    const showTrackers = () => setTrackers(true);
    const hideTrackers = () => setTrackers(false);

    const [newGoalLabel, setNewGoal] = useState(false)
    const showNewGoalLabel = () => setNewGoal(true);
    const hideNewGoal = () => setNewGoal(false);

    const [newTransactionLabel, setNewTransaction] = useState(false)
    const showNewTransaction = () => setNewTransaction(true);
    const hideNewTransaction = () => setNewTransaction(false);

    const showLabels = homeLabel || calendarLabel || accountLabel || newGoalLabel || newTransactionLabel

    function showAccount(e) {
        e.preventDefault();
        const account = document.getElementById('account');
        account.style.display = 'flex';
    }
    
    function showNewGoal(e) {
        e.preventDefault();
        const newGoal = document.getElementById('new-goal');
        newGoal.style.display = 'flex';
    }

    return (
        <header>
            <nav onMouseLeave={hideTrackers} >
                <Link to="/dashboard" className="menu-icon"><img src={home} alt="home" onMouseOver={showHome} onMouseLeave={hideHome} /></Link>
                <Link to="/calendar" className="menu-icon"><img src={calendar} alt="calendar" onMouseOver={showCalendar} onMouseLeave={hideCalendar} /></Link>
                <button onClick={showAccount} className="menu-icon"><img src={account} alt="account" onMouseOver={showAccountLabel} onMouseLeave={hideAccount} /></button>
                <span className="menu-icon"
                  onMouseOver={showTrackers}
                  style={{ opacity: (trackers ? '0.8' : '1') }}>
                    <img src={newRecord} alt="new record" />
                </span>
                <button onClick={showNewGoal} className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={goal} alt="new goal" onMouseOver={showNewGoalLabel} onMouseLeave={hideNewGoal} />
                </button>
                <Link to="/newtransaction" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={finance} alt="new transaction" onMouseOver={showNewTransaction} onMouseLeave={hideNewTransaction} />
                </Link>
            </nav>
            <ul style={{ display: (showLabels ? 'flex' : 'none')}}>
                <li style={{ visibility: (homeLabel ? 'visible' : 'hidden') }}>DreamJournal</li>
                <li style={{ visibility: (calendarLabel ? 'visible' : 'hidden') }}>Calendar</li>
                <li style={{ visibility: (accountLabel ? 'visible' : 'hidden') }}>Account</li>
                <li style={{ visibility: 'hidden' }}>New Record</li>
                <li style={{ visibility: (newGoalLabel ? 'visible' : 'hidden') }}>New Goal</li>
                <li style={{ visibility: (newTransactionLabel ? 'visible' : 'hidden') }}>New Transaction</li>
            </ul>
        </header>
    )
}

export default Nav;