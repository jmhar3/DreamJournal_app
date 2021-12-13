import { useState } from "react";
import { useDispatch } from 'react-redux';
import {postGoal} from '../../actions/postGoal';
import {patchGoal} from '../../actions/patchGoal';
import { userId, date } from "../../Helpers";
import { useNavigate } from "react-router-dom";
import {deleteGoal} from '../../actions/deleteGoal';

function GoalForm({goal}) {
    const goalExists = goal !== null;

    const [state, setState] = useState({
        label: goalExists ? goal.label : "",
        priority: (goalExists ? goal.priority : ""),
        dueDate: (goalExists ? goal.due_date : date())
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addGoal = () => {
        if (goalExists) {
            dispatch(
                patchGoal({
                    ...goal,
                    label: state.label,
                    priority: state.priority,
                    due_date: state.dueDate
                })
            )
        } else {
            dispatch(
                postGoal({
                    user_id: userId,
                    label: state.label,
                    due_date: state.dueDate,
                    priority: state.priority,
                    completed: false
                })
            )
            setState({
                label: "",
                priority: "",
                dueDate: date()
            })
        }
    }

    
    return (
        <div className="form">
            <input type="text" onChange={handleChange} name="label" value={state.label} placeholder="Goal" />
            <input type="datetime-local" onChange={handleChange} name="dueDate" value={state.dueDate} min={state.dueDate}/>
            <div>
                <select onChange={handleChange} value={state.priority} name="priority">
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                { goal !== null ? 
                <button onClick={() => {
                    dispatch(
                        deleteGoal(
                            goal
                        )
                    )
                    navigate('/goals', { replace: true })
                    window.location.reload();
                }} className="submit">Delete</button>
                : null }
                <button onClick={addGoal} className="submit">{goal === null ? "Submit" : "Save"}</button>
            </div>
        </div>
    )
}

export default GoalForm;