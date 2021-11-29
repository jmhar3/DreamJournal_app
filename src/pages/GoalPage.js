import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { useContext } from 'react';
import { GoalContext } from '../components/GoalContext';

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

    const [goalState, dispatch] = useContext(GoalContext)
    
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    <h2>Upcoming Goals</h2>
                    <GoalList goals="hello world" />
                </div>
            </section>
        </div>
    )
}

export default GoalPage;