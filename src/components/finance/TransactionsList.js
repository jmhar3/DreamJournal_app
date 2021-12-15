import Transaction from './TransactionItem';

const TransactionsList = ({ transactions }) => {
    return (
        <ul className="transactions-list">
            <Transaction transaction={transactions[0]} />
            {transactions.length > 1 ? (
                <>
                    {transactions.slice(1).map(transaction => {
                        return (
                            <>
                                <hr />
                                <Transaction transaction={transaction} />
                            </>
                        )
                    })}
                </>
            ) : null }
        </ul>
    )
}

export default TransactionsList;