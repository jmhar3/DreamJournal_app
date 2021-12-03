import { useRef } from "react"
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = () => {
    const labelRef = useRef();
    const amountRef = useRef();
    const directionRef = useRef();
    const categoryRef = useRef();

    const dispatch = useDispatch();

    const addTransaction = () => {
        dispatch({
            type: "ADD_TRANSACTION",
            transaction: {
                key: uuidv4(),
                label: labelRef.current.value,
                amount: amountRef.current.value,
                direction: directionRef.current.value,
                category: categoryRef.current.value
            }
        }) 
    }

    return (
        <div className="form">
            <div>
                <input type="text" placeholder="Description" ref={labelRef} />
                <label>$ <input type="number" placeholder="0.00" ref={amountRef} /></label>
                <select ref={directionRef}>
                    <option value="incoming">Incoming</option>
                    <option value="outgoing">Outgoing</option>
                </select>
            </div>
            <div>
                
            <select ref={categoryRef}>
                    <option value="none">Category</option>
                    <option value="clothing">🧥 Clothing</option>
                    <option value="debt">💳 Debt</option>
                    <option value="education">📚 Education</option>
                    <option value="entertainment">🎮 Entertainment</option>
                    <option value="food">🍜 Food</option>
                    <option value="health">❤️‍🩹 Health</option>
                    <option value="household">🧻 Household</option>
                    <option value="housing">🏡 Housing</option>
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

const mapDispatchToProps = dispatch => ({
    addTransaction: (transaction) => dispatch({
        type: "ADD_TRANSACTION",
        transaction
    })
})

export default TransactionForm;