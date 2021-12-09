import { capitalize } from '../../Helpers';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../actions/deleteTransaction';

const TransactionsList = ({ transactions }) => {
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
            case 'transport':
                return "🛩️"
            default:
                return "🏦"
        }
    }

    const dispatch = useDispatch();

    const destroyTransaction = (transaction) => {
        dispatch(
            deleteTransaction({
                transaction
            })
        )
    }

    return (
        <ul>
            {transactions?.map(transaction => {
                return (
                    <>
                        <li key={transaction.id}>
                            <span>
                                <h1>{categoryEmoji(transaction.category)}</h1>
                                <div className="transactions-label">
                                    <h5>{transaction.description}</h5>
                                    <p className="label">{capitalize(transaction.category)}</p>
                                </div>
                            </span>
                            <span>
                                <p>{transaction.direction === 'income' ? "+" : "-"}${transaction.amount}</p>
                                <h4 onClick={destroyTransaction}>✕</h4>
                            </span>
                        </li>
                        <hr />
                    </>
                )
            })}
        </ul>
    )
}

export default TransactionsList;