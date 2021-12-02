import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { GoalContext } from '../components/GoalContext';

const GoalForm = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-0" + day + "T" + hours + ":" + minutes

    const {register, handleSubmit} = useForm();

    const [goalState, dispatch] = useContext(GoalContext);

    const createGoal = data => {
        dispatch({
            type: "createGoal",
            data: Object.values(data)
        }) 
    }
    
    return (
        <form onSubmit={handleSubmit(createGoal)}>
            <input type="text" {...register("label")} placeholder="Goal" />
            <input type="datetime-local" {...register("due_date")}  value={today} min={today}/>
            <div>
                <select {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default GoalForm;