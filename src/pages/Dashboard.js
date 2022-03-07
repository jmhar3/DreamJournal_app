import { Link } from "react-router-dom";
import GoalProgressBar from '../components/goals/GoalProgressBar';
import FinanceChart from '../components/finance/FinanceChart';
import GoalList from '../components/goals/GoalList';
import TransactionList from '../components/finance/TransactionsList';
import FinanceCategories from '../components/finance/FinanceCategories';
import Account from '../components/account/AccountSettings.js';
import { useSelector, useDispatch } from 'react-redux';
import PinnedNotes from '../components/notes/PinnedNotes';
import { capitalize } from "../Helpers";
import jwt from 'jwt-decode';
import { fetchGoals } from "../actions/fetchGoals";
import { fetchNotes } from "../actions/fetchNotes";
import { fetchTransactions } from "../actions/fetchTransactions";
import { useEffect } from 'react';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoals())
        dispatch(fetchNotes())
        dispatch(fetchTransactions())
    }, [dispatch])

    const notes = useSelector(state => state.notes)
    const goals = useSelector(state => state.goals)
    const transactions = useSelector(state => state.transactions)

    const dateTime = new Date()
    const curHr = dateTime.getHours()
    const today = dateTime.toDateString()
    
    function greeting() {
        if (curHr < 12) {
            return 'Good Morning'
        } else if (curHr < 18) {
            return 'Good Afternoon'
        } else {
            return 'Good Evening'
        }
    }

    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()

    const validDate = (date) => {
        if (date.toString().length === 1) {
            return "0" + date
        } else {
            return date
        }
    }

    const todaysDate = year + "-" + validDate(month) + "-" + validDate(day);

    function isToday(goal) {
        return goal.due_date?.includes(todaysDate);
    }

    const todaysGoals = goals.filter(isToday)
    const sortedGoals = todaysGoals.sort((a, b) => b.id - a.id)
    const completedGoals = sortedGoals.filter(goal => !goal.completed)
    const incompleteGoals = sortedGoals.filter(goal => !!goal.completed)

    var renderGoals;
    if (completedGoals.length > 0 && incompleteGoals.length > 0) {
        renderGoals = <><GoalList goals={completedGoals} /><GoalList goals={incompleteGoals} /></>
    } else if (completedGoals.length > 0 && !incompleteGoals.length > 0) {
        renderGoals = <GoalList goals={completedGoals} />
    } else if (!completedGoals.length > 0 && incompleteGoals.length > 0) {
        renderGoals = <GoalList goals={incompleteGoals} />
    } else {
        renderGoals = <Link to="/goals/new" className="button gyst-button">Get your goals together</Link>
    }

    const sortedNotes = notes.sort((a, b) => b.id - a.id)
    var renderNotes;
    if (notes?.find(note => note.pinned === true)) {
        renderNotes = <PinnedNotes notes={sortedNotes}/>
    } else {
        renderNotes = <Link to="/notes/new" className="button gyst-button">Get your notes together</Link>
    }

    const sortedTransactions = transactions.sort((a, b) => b.id - a.id)
    var renderTransactions;
    if (transactions.length > 0) {
        renderTransactions = <TransactionList transactions={sortedTransactions} />
    } else {
        renderTransactions = <Link to="/transactions/new" className="button gyst-button">Get your finances together</Link>
    }

    const username = jwt(localStorage.getItem('jwt')).user_name;

    return (
        <main id="dashboard">
            <section className="dashboard-left">
                <section id="db-header">
                    <div>
                        <h3>{today}</h3>
                        <h1>
                            {greeting()}, {capitalize(username)}
                        </h1>
                    </div>
                    <Account />
                </section>
                <section className="finance-charts">
                    <FinanceChart type={'expense'} transactions={transactions}  />
                    <FinanceChart type={'income'} transactions={transactions}  />
                </section>
                <section id="transaction-stats">
                    <div id="db-finance-categories">
                        <FinanceCategories type={'expense'} transactions={transactions} />
                        <hr/>
                        <FinanceCategories type={'income'} transactions={transactions} />
                    </div>
                    <div id="db-transactions">
                        {renderTransactions}
                    </div>
                </section>
            </section>
            <section className="dashboard-right">
                <div className="dashboard-goals">
                    <span>
                        <h3>Todays Focus</h3>
                        <Link to="/goals/new" className="button">+</Link>
                    </span>
                    <GoalProgressBar goals={todaysGoals}/>
                    {renderGoals}
                </div>
                <div id="db-notes">
                    {renderNotes}
                </div>
            </section>
        </main>
    )
}
  
export default Dashboard;