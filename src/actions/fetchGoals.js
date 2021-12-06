export function fetchGoals() {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_ASTRONAUTS_REQUEST" });
        fetch("http://localhost:3000/goals", {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => res.json())
        .then(res => {
            res.every(goal =>
                dispatch({
                    type: "createGoal",
                    goal: goal
                })
            )
        })
    };
}