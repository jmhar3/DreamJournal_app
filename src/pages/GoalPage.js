import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { useContext } from 'react';
import { GoalContext } from '../components/GoalContext';
import { Link } from "react-router-dom";

const GoalPage = () => {
    const [goalState, dispatch] = useContext(GoalContext)
    var goals;
    if (goalState.length !== 0) {
        goals = <GoalList goals={goalState} />
    } else {
        goals = <Link to="/goalpage" className="button">Get your sh*t together</Link>
    }
    
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm />
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    <h2>Upcoming Goals</h2>
                    {goals}
                </div>
            </section>
        </div>
    )
}

export default GoalPage;