import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';

const Goal = ({goal}) => {
    const dispatch = useDispatch();

    const [completed, setCompleted] = useState(false)

    const handleComplete = () => {
        setCompleted(!completed);
        dispatch({
            type: "COMPLETED_GOAL",
            goal: {
                key: goal.key,
                completed: completed
            }
        }) 
    }

    return (
        <li>
            <input type="checkbox" checked={completed} onClick={handleComplete} />
            <div className="goal-label" key={goal.key}>
                {completed ?
                    <s><Link to="edit_goal">{goal.label}</Link></s>
                    : <Link to="edit_goal">{goal.label}</Link>
                }
                <p className="label">{goal.due_date.replace("T", " ")}</p>
            </div>
            <div className={`priority-indicator ${goal.priority}`}></div>
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    updateGoal: (goal) => dispatch({
        type: "COMPLETED_GOAL",
        goal
    })
})

export default connect(mapDispatchToProps)(Goal);