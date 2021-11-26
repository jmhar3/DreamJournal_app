import GoalForm from '../components/GoalForm';

const GoalPage = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    return (
        <div id="new-goal" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    <h2>Upcoming Goals</h2>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <div className="goal-label">
                                <h5>Read a book</h5>
                                <p className="label">03.12.21 13:00</p>
                            </div>
                            <div className="priority-indicator high"></div>
                        </li>
                        <hr />
                        <li>
                            <input type="checkbox" />
                            <div className="goal-label">
                                <h5>Read a book</h5>
                                <p className="label">🔄 21.12.21 18:00</p>
                            </div>
                            <div className="priority-indicator norm"></div>
                        </li>
                        <hr />
                        <li>
                            <input type="checkbox" />
                            <div className="goal-label">
                                <h5>Read a book</h5>
                                <p className="label">🔄 15.12.21 11:00</p>
                            </div>
                            <div className="priority-indicator low"></div>
                        </li>
                        <hr />
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default GoalPage;