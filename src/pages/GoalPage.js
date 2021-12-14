import GoalForm from '../components/goals/GoalForm';
import GoalList from '../components/goals/GoalList';
import { fetchGoals } from "../actions/fetchGoals";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { date } from "../Helpers";

const GoalPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoals())
    }, [])

    const goalData = useSelector(state => state.goals)

    const pastGoals = goalData.filter(goal => goal.due_date < date() && goal.completed !== true)
    const futureGoals = goalData.filter(goal => goal.due_date > date())

    const { id } = useParams();

    var goal = null;
    if (id) goal = goalData.find(goal => goal.id === parseInt(id))
    
    return (
        <div id="form-db" >
            <section className="dashboard-left">
                <h1>{id ? 'Edit' : 'Create'} Goal</h1>
                <GoalForm goal={goal}/>
            </section>
            <section className="dashboard-right ">
                <div className="dashboard-goals">
                    {pastGoals.length > 0 ?
                    <>
                        <h2>Past Goals</h2>
                        <GoalList goals={pastGoals} />
                    </>
                    : null }
                    {pastGoals.length > 0 ?
                    <>
                        <h2>Upcoming Goals</h2>
                        <GoalList goals={futureGoals} />
                    </>
                    : null }
                </div>
            </section>
        </div>
    )
}

export default GoalPage;