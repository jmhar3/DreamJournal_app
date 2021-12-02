function goalReducer (goals = [], action) {
    switch (action.type) {
        case "ADD_GOAL":
            return [...goals, action.data]
        case "DELETE_GOAL":
            return goals.filter(goal => action.data !== goal)
        case "UPDATE_GOAL":
            return goals.map((goal) => {
                if (goal === action.data.oldGoal) {
                    goal = action.data.newGoal
                }
                return goal
            })
        default:
            return goals;
    }
}

export default goalReducer;