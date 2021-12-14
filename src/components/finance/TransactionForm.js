import { useState } from "react"
import { useDispatch } from 'react-redux';
import {postTransaction} from '../../actions/postTransaction';
import { userId } from "../../Helpers";

const TransactionForm = () => {
    const [state, setState] = useState({
        amount: "",
        direction: "income",
        category: "business",
        description: ""
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();

    const addTransaction = () => {
        dispatch(
            postTransaction({
                user_id: userId,
                amount: state.amount,
                direction: state.direction,
                category: state.category,
                description: state.description
            })
        )
        setState({
            amount: "",
            direction: "income",
            category: "business",
            description: ""
        })
    }

    return (
        <div className="form">
            <div>
                <input type="text"
                    placeholder="Description"
                    value={state.description}
                    onChange={handleChange}
                    name="description"
                />
                <label>$ <input
                    type="number"
                    placeholder="0.00"
                    value={state.amount}
                    onChange={handleChange}
                    name="amount" 
                /></label>
            </div>
            <div>
                <select
                    value={state.category} 
                    onChange={handleChange}
                    name="category"
                >
                    <option value="none" disabled>Category</option>
                    <option value="business">💼 Business</option>
                    <option value="clothing">🧥 Clothing</option>
                    <option value="debt">💳 Debt</option>
                    <option value="education">📚 Education</option>
                    <option value="entertainment">🎮 Entertainment</option>
                    <option value="food">🍜 Food</option>
                    <option value="health">❤️‍🩹 Health</option>
                    <option value="home">🏡 Home</option>
                    <option value="insurance">🚘 Insurance</option>
                    <option value="personal">💇🏽 Personal</option>
                    <option value="savings">💰 Savings</option>
                    <option value="transport">🛩️ Transport</option>
                    <option value="utility">📱 Utility</option>
                    <option value="other">🏦 Other</option>
                </select>
                <select
                    value={state.direction}
                    onChange={handleChange}
                    name="direction"
                >
                    <option value="none" disabled>Direction</option>
                    <option value="income">Incoming</option>
                    <option value="expense">Outgoing</option>
                </select>
            <button onClick={addTransaction} className="submit">Submit</button>
            </div>
        </div>
    )
}

export default TransactionForm;