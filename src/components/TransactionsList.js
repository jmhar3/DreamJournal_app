import { Link } from "react-router-dom";
import { connect } from 'react-redux';

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

    function capitalize(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    const sampleOne = ['Phone', 'utility', '$100']
    const sampleTwo = ['Netflix', 'entertainment', '$19']
    const sampleThree = ['Uber', 'transport', '$100']
    const sampleFour = ['Gong De Lin', 'food', '$40']

    return (
        // {transactions.length < 0 ? (
        //     <ul>
        //         {transactions.map(transaction => {
        //             <li key={transaction.key}>
        //                 <span>
        //                       <h1>{categoryEmoji(transaction.category)}</h1>
        //                       <div className="transactions-label">
        //                           <h5>{transaction.label}</h5>
        //                           <p className="label">{capitalize(transaction.category)}</p>
        //                       </div>
        //                 </span>
        //                 <p>${transaction.amount}</p>
        //             </li>
        //             <hr />
        //         })}
        //     </ul>
        // ) : null}

        <ul>
            <li>
                <span>
                    <h1>{categoryEmoji(sampleTwo[1])}</h1>
                    <div className="transactions-label">
                        <h5>{sampleTwo[0]}</h5>
                        <p className="label">{capitalize(sampleTwo[1])}</p>
                    </div>
                </span>
                <p>{sampleTwo[2]}</p>
            </li>
            <hr />
            <li>
                <span>
                    <h1>{categoryEmoji(sampleThree[1])}</h1>
                    <div className="transactions-label">
                        <h5>{sampleThree[0]}</h5>
                        <p className="label">{capitalize(sampleThree[1])}</p>
                    </div>
                </span>
                <p>{sampleThree[2]}</p>
            </li>
            <hr />
            <li>
                <span>
                    <h1>{categoryEmoji(sampleFour[1])}</h1>
                    <div className="transactions-label">
                        <h5>{sampleFour[0]}</h5>
                        <p className="label">{capitalize(sampleFour[1])}</p>
                    </div>
                </span>
                <p>{sampleFour[2]}</p>
            </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return { transactions: state.transactions }
}

export default connect(mapStateToProps)(TransactionsList);