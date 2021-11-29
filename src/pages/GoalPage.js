import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';

const GoalPage = () => {
    fetch("http://localhost:3000/goals", {
        method: 'get',
        headers: {
             'content-type': 'application/json',
             'accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    <h2>Upcoming Goals</h2>
                    <GoalList />
                </div>
            </section>
        </div>
    )
}

export default GoalPage;