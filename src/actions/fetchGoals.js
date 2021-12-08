export function fetchGoals() {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_GOALS_REQUEST" });
        fetch("http://localhost:3000/goals", {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => res.json())
        .then(goals => {
            dispatch({
                type: "ADD_GOALS",
                goals
            })
        })
    };
}