import { createContext, useReducer } from "react";

export const GoalContext = createContext(null)

export const GoalContextProvider = props => {
    const [goalState, dispatch] = useReducer(GoalReducer, []);

    return (
        <GoalContext.Provider value={[goalState, dispatch]}>
            {props.children}
        </GoalContext.Provider>
    )
}

const GoalReducer = (state, action) => {
    switch (action.type) {
        case "createGoal":
            return [...state, action.data]
        case "deleteGoal":
            return state.filter(goal => action.data !== goal)
        case "updateGoal":
            return state.map((goal) => {
                if (goal === action.data.oldGoal) {
                    goal = action.data.newGoal
                }
                return goal
            })
        default:
            return state;
    }
}