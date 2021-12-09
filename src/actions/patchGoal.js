export function patchGoal(goal) {
    return (dispatch) => {
        dispatch({ type: "PATCHING_GOAL_REQUEST" });
        fetch(`http://localhost:3000/goals/${goal.oldGoal.id}`, {
            method: 'patch',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                goal: goal.newGoal
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "UPDATE_GOAL",
                goal
            })
        })
    };
}