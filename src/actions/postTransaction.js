export function postTransaction(transaction) {
    return (dispatch) => {
        dispatch({ type: "POSTING_TRANSACTION_REQUEST" });
        fetch("http://localhost:3000/transactions", {
            method: 'post',
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
                type: "ADD_TRANSACTION",
                transaction: transaction
            })
        })
    };
}