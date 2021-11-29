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
        case "addGoal":
            if (state.length < 6) {
                return [...state, action.data]
            }
        case "removeGoal":
            if (state.length > 4) {
                return state.filter(goal => action.data !== goal)
            }
        case "updateGoal":
            return state.map((goal) => {
                if (goal === action.data.oldColour) {
                    goal = action.data.newColour
                }
                return goal
            })
        case "openPalette":
            return [...action.data]
        default:
            return state;
    }
}