import { useForm } from 'react-hook-form';

const GoalForm = () => {
    const {register, handleSubmit} = useForm();

    async function onSubmit(d) {

    }

    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="goal" placeholder="Goal" />
            <input type="datetime-local" name="due-date" value={today} min={today}/>
            <div>
                <select value="priority" >
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