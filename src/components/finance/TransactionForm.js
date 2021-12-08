import { useRef } from "react"
import { useDispatch } from 'react-redux';
import {postTransaction} from '../../actions/postTransaction';
import { userId } from "../../Helpers";

const TransactionForm = () => {
    const labelRef = useRef();
    const amountRef = useRef();
    const directionRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const dispatch = useDispatch();

    const addTransaction = () => {
        dispatch(
            postTransaction({
                user_id: userId,
                amount: amountRef.current.value,
                direction: directionRef.current.value,
                category: categoryRef.current.value,
                description: descriptionRef.current.value
            })
        )
    }

    return (
        <div className="form">
            <div>
                <input type="text" placeholder="Description" ref={descriptionRef} />
                <label>$ <input type="number" placeholder="0.00" ref={amountRef} /></label>
                <select ref={directionRef}>
                    <option value="income">Incoming</option>
                    <option value="expense">Outgoing</option>
                </select>
            </div>
            <div>
                
            <select ref={categoryRef}>
                    <option value="none">Category</option>
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
            <button onClick={addTransaction} className="submit">Submit</button>
            </div>
        </div>
    )
}

export default TransactionForm;