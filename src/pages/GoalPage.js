import GoalForm from '../components/goals/GoalForm';
import GoalList from '../components/goals/GoalList';
import { Link } from "react-router-dom";
import { fetchGoals } from "../actions/fetchGoals";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

const GoalPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoals())
    }, [])

    const goalData = useSelector(state => state.goals)

    var goals;
    if (goalData.length !== 0) {
        goals = <GoalList goals={goalData} />
    } else {
        goals = <Link to="/goalpage" className="button">Get your sh*t together</Link>
    }

    const { id } = useParams();

    var goal = null;
    if (id) goal = goalData.find(goal => goal.id === parseInt(id))
    
    return (
        <div id="goal-db" >
            <section className="dashboard-left">
                <h1>Create Goal</h1>
                <GoalForm goal={goal}/>
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