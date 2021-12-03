import { Link } from "react-router-dom";
import GoalProgressBar from '../components/GoalProgressBar';
import FinanceChart from '../components/FinanceChart';
import GoalList from '../components/GoalList';
import TransactionList from '../components/TransactionsList';
import FinanceCategories from '../components/FinanceCategories';
import { connect } from 'react-redux';
import PinnedNotes from '../components/PinnedNotes';

const Dashboard = ({goals, notes, transactions}) => {
    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

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
        return goal.due_date.includes(todaysDate);
    }

    const todaysGoals = goals.filter(isToday)

    var renderGoals;
    if (todaysGoals.length !== 0) {
        renderGoals = <GoalList goals={todaysGoals} />
    } else {
        renderGoals = <Link to="/goalpage" className="button gyst-button">Get your goals together</Link>
    }

    var renderNotes;
    if (notes.find(note => note.pinned === true)) {
        renderNotes = <PinnedNotes notes={notes}/>
    } else {
        renderNotes = <Link to="/goalpage" className="button gyst-button">Get your notes together</Link>
    }

    var renderTransactions;
    if (transactions !== undefined) {
        renderTransactions = <TransactionList transactions={'transactions'} />
    } else {
        renderTransactions = <Link to="/goalpage" className="button gyst-button">Get your finances together</Link>
    }

    return (
        <main id="dashboard">
            <section className="dashboard-left">
                <div id="db-header">
                    <h3>{today}</h3>
                    <h1>{greeting()}, {capitalize(localStorage.getItem('username'))}</h1>
                </div>
                <section className="finance-charts">
                    <FinanceChart type={'Expense'} />
                    <FinanceChart type={'Income'} />
                </section>
                <section id="transaction-stats">
                    <div id="db-finance-categories">
                        <FinanceCategories transactions={'transactions'} />
                    </div>
                    <div id="db-transactions">
                        {renderTransactions}
                    </div>
                </section>
            </section>
            <section className="dashboard-right">
                <div className="dashboard-goals">
                    <span>
                        <h2>Todays Focus</h2>
                        <Link to="/newgoal" className="button">+</Link>
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

const mapStateToProps = state => {
    return { goals: state.goals, notes: state.notes, transaction: state.transactions }
}
  
export default connect(mapStateToProps)(Dashboard);