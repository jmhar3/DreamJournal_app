import { Link } from "react-router-dom";
import { useState } from 'react';
import home from '../images/world.png';
import newRecord from '../images/book.png';
import goal from '../images/to-do.png';
import note from '../images/notes.png';
import finance from '../images/box.png';

const Nav = () => {

    const [homeLabel, setHome] = useState(false)
    const showHome = () => setHome(true);
    const hideHome = () => setHome(false);

    const [trackers, setTrackers] = useState(false)
    const showTrackers = () => setTrackers(true);
    const hideTrackers = () => setTrackers(false);

    const [newGoalLabel, setNewGoal] = useState(false)
    const showNewGoalLabel = () => setNewGoal(true);
    const hideNewGoal = () => setNewGoal(false);

    const [newNoteLabel, setNewNote] = useState(false)
    const showNewNoteLabel = () => setNewNote(true);
    const hideNewNote = () => setNewNote(false);

    const [newTransactionLabel, setNewTransaction] = useState(false)
    const showNewTransaction = () => setNewTransaction(true);
    const hideNewTransaction = () => setNewTransaction(false);

    const showLabels = homeLabel || newGoalLabel || newNoteLabel || newTransactionLabel

    if (!localStorage.getItem('jwt')) {
        return (
            <header className="mobile">
                <nav onMouseLeave={hideTrackers} >
                    <Link to="/" className="menu-icon"><img src={home} alt="home" onMouseOver={showHome} onMouseLeave={hideHome} /></Link>
                </nav>
                <ul>
                    <li style={{ visibility: (homeLabel ? 'visible' : 'hidden') }}>DreamJournal</li>
                </ul>
            </header>
        )
    }

    return (
        <header>
            <nav onMouseLeave={hideTrackers} >
                <Link to="/dashboard" className="menu-icon"><img src={home} alt="home" onMouseOver={showHome} onMouseLeave={hideHome} /></Link>
                <span className="menu-icon"
                  onMouseOver={showTrackers}
                  style={{ opacity: (trackers ? '0.8' : '1') }}>
                    <img src={newRecord} alt="new record" />
                </span>
                <Link to="/goalpage" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={goal} alt="new goal" onMouseOver={showNewGoalLabel} onMouseLeave={hideNewGoal} />
                </Link>
                <Link to="/notepad" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={note} alt="new note" onMouseOver={showNewNoteLabel} onMouseLeave={hideNewNote} />
                </Link>
                <Link to="/financepage" className="menu-icon" style={{ visibility: (trackers ? 'visible' : 'hidden') }}>
                    <img src={finance} alt="new transaction" onMouseOver={showNewTransaction} onMouseLeave={hideNewTransaction} />
                </Link>
            </nav>
            <ul style={{ display: (showLabels ? 'flex' : 'none')}}>
                <li style={{ visibility: (homeLabel ? 'visible' : 'hidden') }}>DreamJournal</li>
                <li style={{ visibility: 'hidden' }}>New Record</li>
                <li style={{ visibility: (newGoalLabel ? 'visible' : 'hidden') }}>New Goal</li>
                <li style={{ visibility: (newNoteLabel ? 'visible' : 'hidden') }}>New Note</li>
                <li style={{ visibility: (newTransactionLabel ? 'visible' : 'hidden') }}>New Transaction</li>
            </ul>
        </header>
    )
}

export default Nav;