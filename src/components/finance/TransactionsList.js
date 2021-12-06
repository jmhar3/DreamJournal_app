import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {capitalize} from '../../Helpers';

const TransactionsList = ({transactions}) => {
    function categoryEmoji(category) {
        switch (category) {
            case 'clothing':
                return "🧥"
            case 'debt':
                return "💳"
            case 'education':
                return "📚"
            case 'entertainment':
                return "🎮"
            case 'food':
                return "🍜"
            case 'health':
                return "❤️‍🩹"
            case 'housing':
                return "🧻"
            case 'household':
                return "🏡"
            case 'insurance':
                return "🚘"
            case 'personal':
                return "💇🏽"
            case 'savings':
                return "💰"
            case 'transport':
                return "🛩️"
            case 'utility':
                return "📱"
            default:
                return "🏦"
        }
    }

    const sampleOne = ['Phone', 'utility', '$100']
    const sampleTwo = ['Netflix', 'entertainment', '$19']
    const sampleThree = ['Uber', 'transport', '$100']
    const sampleFour = ['Gong De Lin', 'food', '$40']

    return (
        <>
        {transactions.length < 0 ? (
            <ul>
                {transactions.map(transaction => {
                    <>
                    <li key={transaction.key}>
                        <span>
                              <h1>{categoryEmoji(transaction.category)}</h1>
                              <div className="transactions-label">
                                  <h5>{transaction.label}</h5>
                                  <p className="label">{capitalize(transaction.category)}</p>
                              </div>
                        </span>
                        <p>${transaction.amount}</p>
                    </li>
                    <hr />
                    </>
                })}
            </ul>
        ) : null}
        </>
    )
}

const mapStateToProps = state => {
    return { transactions: state.transactions }
}

export default connect(mapStateToProps)(TransactionsList);