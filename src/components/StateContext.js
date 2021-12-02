import { createContext, useReducer } from "react";
import goalReducer from '../reducers/GoalReducer';
import noteReducer from '../reducers/NoteReducer';
import transactionReducer from '../reducers/TransactionReducer';

export const StateContext = createContext()

export const StateContextProvider = props => {
    const [goals, goalsDispatch] = useReducer(goalReducer, []);
    const [notes, notesDispatch] = useReducer(noteReducer, []);
    const [transactions, transactionsDispatch] = useReducer(transactionReducer, []);

    return (
        <StateContext.Provider value={{goals, goalsDispatch, notes, notesDispatch, transactions, transactionsDispatch}}>
            {props.children}
        </StateContext.Provider>
    )
}