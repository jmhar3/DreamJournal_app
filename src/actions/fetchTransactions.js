export function fetchTransactions() {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_TRANSACTIONS_REQUEST" });
        fetch("http://localhost:3000/api/v1/transactions", {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => res.json())
        .then(transactions => {
            dispatch({
                type: "ADD_TRANSACTIONS",
                transactions
            })
        })
    };
}