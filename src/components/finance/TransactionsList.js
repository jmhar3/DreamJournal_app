import { capitalize } from '../../Helpers';
import { v4 as uuidv4 } from 'uuid';

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
                            <p>{transaction.direction === 'income' ? "+" : "-"}${transaction.amount}</p>
                        </li>
                        <hr />
                    </>
                )
            })}
        </ul>
    )
}

export default TransactionsList;