import { capitalize } from '../../Helpers';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../actions/deleteTransaction';
import { v4 as uuidv4 } from 'uuid';

const TransactionsList = ({ transaction }) => {
    function categoryEmoji(category) {
        switch (category) {
            case 'business':
                return "💼"
            case 'clothing':
                return "🧥"
            case 'education':
                return "📚"
            case 'entertainment':
                return "🎮"
            case 'food':
                return "🍜"
            case 'health':
                return "❤️‍🩹"
            case 'home':
                return "🏡"
            case 'personal':
                return "💇🏽"
            case 'pet':
                return "🐶"
            case 'transport':
                return "🛩️"
            default:
                return "🏦"
        }
    }

    const dispatch = useDispatch();

    return (
        <li key={uuidv4}>
            <span>
                <h1>{categoryEmoji(transaction.category)}</h1>
                <div className="transactions-label">
                    <h5>{transaction.description}</h5>
                    <p className="label">{capitalize(transaction.category)}</p>
                </div>
            </span>
            <span>
                <p>{transaction.direction === 'income' ? "+" : "-"}${Number.parseFloat(transaction.amount).toFixed(2)}</p>
                <h4 onClick={() => {
                    dispatch(
                        deleteTransaction(
                            transaction
                        )
                    )
                    window.location.reload();
                }}
                >✕</h4>
            </span>
        </li>
    )
}

export default TransactionsList;