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
    const showAccount = () => setAccount(true);
    const hideAccount = () => setAccount(false);

    const [trackers, setTrackers] = useState(false)
    const [newRecordLabel, setNewRecord] = useState(false)
    function showNewRecord() {
        setNewRecord(true);
        setTrackers(true);
    }
    const hideNewRecord = () => setNewRecord(false);
    const hideTrackers = () => setTrackers(false);

    const [newGoalLabel, setNewGoal] = useState(false)
    const showNewGoal = () => setNewGoal(true);
    const hideNewGoal = () => setNewGoal(false);

    const [newTransactionLabel, setNewTransaction] = useState(false)
    const showNewTransaction = () => setNewTransaction(true);
    const hideNewTransaction = () => setNewTransaction(false);

    const showLabels = homeLabel || calendarLabel || accountLabel || newRecordLabel || newGoalLabel || newTransactionLabel

    return (
        <header>
            <nav onMouseLeave={hideTrackers} >
                <Link to="/dashboard" className="menu-icon"><img src={home} onMouseOver={showHome} onMouseLeave={hideHome} /></Link>
                <Link to="/calendar" className="menu-icon"><img src={calendar} onMouseOver={showCalendar} onMouseLeave={hideCalendar} /></Link>
                <Link to="/account" className="menu-icon"><img src={account} onMouseOver={showAccount} onMouseLeave={hideAccount} /></Link>
                <span className="menu-icon"
                  onMouseOver={showNewRecord}
                  onMouseLeave={hideNewRecord}
                  style={{ opacity: (trackers ? '0.8' : '1') }}>
                    <img src={newRecord}/>
                </span>
                <Link to="/newgoal" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={goal} onMouseOver={showNewGoal} onMouseLeave={hideNewGoal} />
                </Link>
                <Link to="/newtransaction" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={finance} onMouseOver={showNewTransaction} onMouseLeave={hideNewTransaction} />
                </Link>
            </nav>
            <ul style={{ display: (showLabels ? 'flex' : 'none')}}>
                <li style={{ visibility: (homeLabel ? 'visible' : 'hidden') }}>DreamJournal</li>
                <li style={{ visibility: (calendarLabel ? 'visible' : 'hidden') }}>Calendar</li>
                <li style={{ visibility: (accountLabel ? 'visible' : 'hidden') }}>Account</li>
                <li style={{ visibility: (newRecordLabel ? 'visible' : 'hidden') }}>New Record</li>
                <li style={{ visibility: (newGoalLabel ? 'visible' : 'hidden') }}>New Goal</li>
                <li style={{ visibility: (newTransactionLabel ? 'visible' : 'hidden') }}>New Transaction</li>
            </ul>
        </header>
    )
}

export default Nav;