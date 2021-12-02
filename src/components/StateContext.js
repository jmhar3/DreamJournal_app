import { createContext, useReducer } from "react";
import goalReducer from './GoalReducer';

export const StateContext = createContext()

export const StateContextProvider = props => {
    const [goals, dispatch] = useReducer(goalReducer, []);

    return (
        <StateContext.Provider value={{goals, dispatch}}>
            {props.children}
        </StateContext.Provider>
    )
}