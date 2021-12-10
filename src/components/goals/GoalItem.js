import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {patchGoal} from '../../actions/patchGoal';

const Goal = ({goal}) => {
    const dispatch = useDispatch();

    const updateGoal = () => {
        dispatch(
            patchGoal({
                ...goal,
                completed: goal.completed === null ? true : !goal.completed
            })
        )
    }

    return (
        <li>
            <div onClick={updateGoal} className="checkbox">
                { goal.completed ? <h3>✓</h3> : null }
            </div>
            <div className="goal-label" key={goal.id}>
                { goal.completed ?
                    <s><Link to={`/goals/${goal.id}/edit`}>{goal.label}</Link></s>
                    : <Link to={`/goals/${goal.id}/edit`}>{goal.label}</Link>
                }
                <p className="label">{goal.due_date?.replace("T", " ")}</p>
            </div>
            {goal.completed ? null : <div className={`priority-indicator ${goal.priority}`}></div>}
        </li>
    )
}

export default Goal;