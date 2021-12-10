export function postNote(note) {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE_REQUEST" });
        fetch("http://localhost:3000/api/v1/notes", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                note
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "ADD_NOTE",
                note: note
            })
        })
    };
}