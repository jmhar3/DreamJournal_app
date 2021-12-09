export function deleteTransaction(transaction) {
    return (dispatch) => {
        dispatch({ type: "DELETING_TRANSACTION_REQUEST" });
        fetch(`http://localhost:3000/transaction/${transaction.id}`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                transaction
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "DELETE_TRANSACTION",
                transaction: transaction
            })
        })
    };
}