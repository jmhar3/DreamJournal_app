import { useRef } from "react";
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    async function addGoal() {
        dispatch({
            type: "ADD_GOAL",
            goal: {
                key: uuidv4(),
                label: labelRef.current.value,
                due_date: dueDateRef.current.value,
                priority: priorityRef.current.value,
                completed: false
            }
        })
        navigate("/dashboard", { replace: true });
    }
    
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

const mapDispatchToProps = dispatch => ({
    addGoal: (goal) => dispatch({
        type: "ADD_GOAL",
        goal
    })
})

export default connect(mapDispatchToProps)(GoalForm);