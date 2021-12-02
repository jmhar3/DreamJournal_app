import { useRef } from "react"
import { connect, useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const GoalForm = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-0" + day + "T" + hours + ":" + minutes;

    const labelRef = useRef();
    const dueDateRef = useRef();
    const priorityRef = useRef();

    const dispatch = useDispatch();

    const addGoal = () => {
        dispatch({
            type: "ADD_GOAL",
            goal: {
                id: uuidv4(),
                label: labelRef.current.value,
                due_date: dueDateRef.current.value,
                priority: priorityRef.current.value
            }
        }) 
    }
    
    return (
        <form onSubmit={addGoal}>
            <input type="text" ref={labelRef} placeholder="Goal" />
            <input type="datetime-local" ref={dueDateRef}  value={today} min={today}/>
            <div>
                <select ref={priorityRef}>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    addGoal: (goal) => dispatch({
        type: "ADD_GOAL",
        goal
    })
})

export default GoalForm;