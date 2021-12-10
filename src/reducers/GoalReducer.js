function goalReducer (goals = [], action) {
    switch (action.type) {
        case "DELETING_GOAL_REQUEST":
            return goals
        case "PATCHING_GOAL_REQUEST":
            return goals
        case "POSTING_GOAL_REQUEST":
            return goals
        case "START_ADDING_GOALS_REQUEST":
            return goals
        case "ADD_GOALS":
            return [...action.goals]
        case "ADD_GOAL":
            return [...goals, action.goal]
        case "DELETE_GOAL":
            return goals.filter(goal => action.goal !== goal)
        case "UPDATE_GOAL":
            return goals.map((goal) => {
                if (goal.id === action.goal.id) {
                    goal = action.goal
                }
                return goal
            })
        default:
            return goals;
    }
}

export default goalReducer;