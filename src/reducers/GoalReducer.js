function goalReducer (goals = [], action) {
    switch (action.type) {
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
                if (goal === action.goal.oldGoal) {
                    goal = action.goal.newGoal
                }
                return goal
            })
        case "COMPLETED_GOAL":
            return goals.map((goal) => {
                if (goal === action.goal.key) {
                    goal.confirmed = action.goal.confirmed
                }
                return goal
            })
        default:
            return goals;
    }
}

export default goalReducer;