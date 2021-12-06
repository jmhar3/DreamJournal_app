function transactionReducer (transactions = [], action) {
    switch (action.type) {
        case "ADD_TRANSACTION":
            console.log('hi')
            return [...transactions, action.transaction]
        case "DELETE_TRANSACTION":
            return transactions.filter(transaction => action.transaction !== transaction)
        default:
            return transactions;
    }
}

export default transactionReducer;