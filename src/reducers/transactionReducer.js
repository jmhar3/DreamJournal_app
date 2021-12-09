function transactionReducer (transactions = [], action) {
    switch (action.type) {
        case "DELETING_TRANSACTION_REQUEST":
            return transactions
        case "POSTING_TRANSACTION_REQUEST":
            return transactions
        case "START_ADDING_TRANSACTIONS_REQUEST":
            return transactions
        case "ADD_TRANSACTIONS":
            return [...action.transactions]
        case "ADD_TRANSACTION":
            return [...transactions, action.transaction]
        case "DELETE_TRANSACTION":
            return transactions.filter(transaction => action.transaction !== transaction)
        default:
            return transactions;
    }
}

export default transactionReducer;