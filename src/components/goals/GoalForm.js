import { useRef } from "react"
import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import {postGoal} from '../../actions/postGoal';
import { userId } from "../../Helpers";

function GoalForm() {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1

    const validDate = (date) => {
        if (date.toString().length === 1) {
            return "0" + date
        } else {
            return date
        }
    }

    const today = year + "-" + validDate(month) + "-" + validDate(day) + "T" + validDate(hours) + ":" + validDate(minutes);

    const labelRef = useRef();
    const dueDateRef = useRef();
    const priorityRef = useRef();

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const addGoal = () => {
        dispatch(
            postGoal({
                user_id: userId,
                label: labelRef.current.value,
                due_date: dueDateRef.current.value,
                priority: priorityRef.current.value,
                completed: false
            })
        )
    }

    // navigate("/dashboard", { replace: true });
    
    return (
        <div className="form">
            <input type="text" ref={labelRef} placeholder="Goal" />
            <input type="datetime-local" ref={dueDateRef}  value={today} min={today}/>
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