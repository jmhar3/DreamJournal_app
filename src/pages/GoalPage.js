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

    const sortedGoals = goalData.sort((a, b) => b.id - a.id)
    console.log(sortedGoals)

    const completed = (goal) => goal.completed === true

    const pastGoals = goalData.filter(goal => goal.due_date < date() && !completed(goal))
    const futureGoals = goalData.filter(goal => goal.due_date > date() && !completed(goal))
    const completedGoals = goalData.filter(goal => completed(goal))

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
                        <h3>Past Goals</h3>
                        <GoalList goals={pastGoals} />
                    </>
                    : null }
                    {futureGoals.length > 0 ?
                    <>
                        <h3>Upcoming Goals</h3>
                        <GoalList goals={futureGoals} />
                    </>
                    : null }
                    {completedGoals.length > 0 ?
                    <>
                        <h3>Completed Goals</h3>
                        <GoalList goals={completedGoals} />
                    </>
                    : null }
                </div>
            </section>
        </div>
    )
}

export default GoalPage;