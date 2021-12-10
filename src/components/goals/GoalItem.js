import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {patchGoal} from '../../actions/patchGoal';

const Goal = ({goal}) => {
    const goalCompleted = goal.completed === null ? false : goal.completed
    const [completed, setCompleted] = useState(goalCompleted);

    const dispatch = useDispatch();

    const updateGoal = () => {
        setCompleted(!completed);
        dispatch(
            patchGoal({
                ...goal,
                completed: completed
            })
        )
    }

    return (
        <li>
            
            <div onClick={updateGoal} className="checkbox">
                { completed ? <h3>✓</h3> : null }
            </div>
            <div className="goal-label" key={goal.id}>
                { completed ?
                    <s><Link to="edit_goal">{goal.label}</Link></s>
                    : <Link to="edit_goal">{goal.label}</Link>
                }
                <p className="label">{goal.due_date?.replace("T", " ")}</p>
            </div>
            {completed ? null : <div className={`priority-indicator ${goal.priority}`}></div>}
        </li>
    )
}

export default Goal;