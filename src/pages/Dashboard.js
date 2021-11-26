import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

const Dashboard = () => {

    // fetch("http://localhost:3000/goals", {
    //     method: 'get',
    //     headers: {
    //          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2VtYWlsIjoiZW1haWxAZ…9tIn0.W2mP9blFUgISQY6TPMx8XTnXGzJxU-7AufBu3cwxeLA'
    //     }
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
    
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

    const finance_goal = 66;

    return (
      <main id="dashboard">
        <section className="dashboard-left">
            <div id="db-header">
                <h3>{today}</h3>
                <h1>{ greeting() }, User Name</h1>
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
            <div id="db-finance-goals">
                <div>
                    <CircularProgressbar value={finance_goal} text={`🏖`} />
                    <h4>Holiday</h4>
                </div>
                <div>
                    <CircularProgressbar value={finance_goal} text={`📱`} />
                    <h4>New Phone</h4>
                </div>
                <div>
                    <CircularProgressbar value={finance_goal} text={`🏡`} />
                    <h4>Home Deposit</h4>
                </div>
            </div>
            <div id="upcoming-payments">
                <h2>Upcoming Payments</h2>
                <div>
                    <h1>🍿</h1>
                    <h4>Netflix</h4>
                    <p class="label">27.11.21</p>
                    <p>$19.00</p>
                </div>
                <div>
                    <h1>📑</h1>
                    <h4>Phone</h4>
                    <p class="label">28.11.21</p>
                    <p>$100.00</p>
                </div>
                <div>
                    <h1>💼</h1>
                    <h4>Advertising</h4>
                    <p class="label">30.11.21</p>
                    <p>$240.00</p>
                </div>
                <div>
                    <h1>🍿</h1>
                    <h4>Disney</h4>
                    <p class="label">31.11.21</p>
                    <p>$19.00</p>
                </div>
            </div>
        </section>
        <section className="dashboard-right">
            <div className="dashboard-goals">
                <span>
                    <h2>Todays Focus</h2>
                    <Link to="/newgoal" className="button">+</Link>
                </span>
                <ProgressBar>
                    <ProgressBar variant="success" now={35} key={1} />
                    <ProgressBar variant="warning" now={20} key={2} />
                    <ProgressBar variant="danger" now={10} key={3} />
                </ProgressBar>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <div className="goal-label">
                            <h5>Read a book</h5>
                            <p className="label">13:00</p>
                        </div>
                        <div className="priority-indicator high"></div>
                    </li>
                    <hr />
                    <li>
                        <input type="checkbox" />
                        <div className="goal-label">
                            <h5>Read a book</h5>
                            <p className="label">13:00</p>
                        </div>
                        <div className="priority-indicator low"></div>
                    </li>
                    <hr />
                    <li>
                        <input type="checkbox" />
                        <div className="goal-label">
                            <h5>Read a book</h5>
                            <p className="label">🔄 13:00</p>
                        </div>
                        <div className="priority-indicator norm"></div>
                    </li>
                    <hr />
                </ul>
            </div>
            <div id="db-notes">
                <div>
                    <h1>📝</h1>
                    <p>Phase 5</p>
                    <p class="label">31.11.21</p>
                </div>
                <div>
                    <h1>📝</h1>
                    <p>Groceries</p>
                    <p class="label">31.11.21</p>
                </div>
                <div>
                    <h1>📝</h1>
                    <p>Important</p>
                    <p class="label">31.11.21</p>
                </div>
            </div>
        </section>
      </main>
    )
  }
  
  export default Dashboard;