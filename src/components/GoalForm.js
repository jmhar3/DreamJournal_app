const GoalForm = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    return (
        <form>
            <input type="text" name="goal" placeholder="Goal" />
            <input type="datetime-local" name="due-date" value={today} min={today}/>
            <select value="priority" >
                <option value="low">Low</option>
                <option value="mid">Mid</option>
                <option value="high">High</option>
            </select>
            <input type="submit" value="Save" />
        </form>
    )
}

export default GoalForm;