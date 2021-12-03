import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import GoalProgressBar from '../components/GoalProgressBar';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import GoalList from '../components/GoalList';
import TransactionList from '../components/TransactionsList';
import FinanceCategories from '../components/FinanceCategories';
import { connect } from 'react-redux';
import PinnedNotes from '../components/PinnedNotes';

const expenseData = {
    labels: ['Mon', 'Tue', 'Wed',
        'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Expense',
            backgroundColor: '#d40819',
            data: [65, 59, 80, 120, 56, 30, 10]
        }
    ]
}

const incomeData = {
    labels: ['Mon', 'Tue', 'Wed',
        'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Income',
            backgroundColor: '#d40819',
            data: [650, 590, 300, 120, 89, 30, 120]
        }
    ]
}

const Dashboard = ({goals}) => {
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
        renderGoals = <Link to="/goalpage" className="button">Get your sh*t together</Link>
    }

    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <main id="dashboard">
            <section className="dashboard-left">
                <div id="db-header">
                    <h3>{today}</h3>
                    <h1>{greeting()}, {capitalize(localStorage.getItem('username'))}</h1>
                </div>
                <section className="finance-charts">
                    <div>
                        <h2>💸 Expense</h2>
                        <p>$1200.00</p>
                        <Bar data={expenseData} />
                    </div>
                    <div>
                        <h2>🤑 Income</h2>
                        <p>$1800.00</p>
                        <Bar data={incomeData} />
                    </div>
                </section>
                <section id="transaction-stats">
                    <div id="db-finance-categories">
                        <FinanceCategories transactions={'transactions'} />
                    </div>
                    <div id="db-transactions">
                        <TransactionList transactions={'transactions'} />
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
                    <PinnedNotes />
                </div>
            </section>
        </main>
    )
}

const mapStateToProps = state => {
    return { goals: state.goals }
}
  
export default connect(mapStateToProps)(Dashboard);