export function fetchNotes() {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_NOTES_REQUEST" });
        fetch("http://localhost:3000/notes", {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => res.json())
        .then(notes => {
            dispatch({
                type: "ADD_NOTES",
                notes
            })
        })
    };
}