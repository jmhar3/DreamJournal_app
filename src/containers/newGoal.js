const NewGoal = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    function hideNewGoal(e) {
        e.preventDefault();
        const newGoal = document.getElementById('new-goal');
        newGoal.style.display = 'none';
    }

    return (
        <div id="new-goal" className="pop-up">
            <section>
                <button onClick={hideNewGoal}>x</button>
                <h1>Create Goal</h1>
                <form>
                    <input type="text" name="goal" placeholder="Goal" />
                    <input type="text" name="content" placeholder="Content" />
                    <select value="priority" >
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                    </select>
                    <input type="datetime-local" name="due-date" value={today} min={today}/>
                    <input type="submit" value="Lets go!" />
                </form>
            </section>
        </div>
    )
}

export default NewGoal;