export default function fetchGoals() {
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
                data: Object.values(goal)
            })
        )
        console.log(res)
        console.log(goalState)
    })
}