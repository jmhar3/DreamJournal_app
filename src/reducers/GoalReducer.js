function goalReducer (goals = [], action) {
    switch (action.type) {
        case "ADD_GOAL":
            return [...goals, action.goal]
        case "DELETE_GOAL":
            return goals.filter(goal => action.goal !== goal)
        case "UPDATE_GOAL":
            return goals.map((goal) => {
                if (goal === action.goal.oldGoal) {
                    goal = action.goal.newGoal
                }
                return goal
            })
        default:
            return goals;
    }
}

export default goalReducer;