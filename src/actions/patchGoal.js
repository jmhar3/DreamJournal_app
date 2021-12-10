export function patchGoal(goal) {
    return (dispatch) => {
        dispatch({ type: "PATCHING_GOAL_REQUEST" });
        fetch(`http://localhost:3000/api/v1/goals/${goal.id}`, {
            method: 'put',
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
                type: "UPDATE_GOAL",
                goal: goal
            })
        })
    };
}