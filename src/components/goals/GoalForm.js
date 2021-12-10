import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import {postGoal} from '../../actions/postGoal';
import { userId, date } from "../../Helpers";

function GoalForm() {
    const labelRef = useRef();
    const dueDateRef = useRef();
    const priorityRef = useRef();

    const [dateState, setDateState] = useState(date)

    const handleChange = (e) => {
        setDateState(e.target.value)
    }


    const dispatch = useDispatch();

    const addGoal = () => {
        dispatch(
            postGoal({
                user_id: userId,
                label: labelRef.current.value,
                due_date: dateState,
                priority: priorityRef.current.value,
                completed: false
            })
        )
    }
    
    return (
        <div className="form">
            <input type="text" ref={labelRef} placeholder="Goal" />
            <input type="datetime-local" onChange={handleChange} value={dateState} min={date}/>
            <div>
                <select ref={priorityRef}>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                <button onClick={addGoal} className="submit">Submit</button>
            </div>
        </div>
    )
}

export default GoalForm;