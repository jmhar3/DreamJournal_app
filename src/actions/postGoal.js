export function postGoal(goal) {
    return (dispatch) => {
        dispatch({ type: "POSTING_GOAL_REQUEST" });
        fetch("http://localhost:3000/api/v1/goals", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                goal
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "ADD_GOAL",
                goal: goal
            })
        })
    };
}