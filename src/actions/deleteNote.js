export function deleteNote(note) {
    return (dispatch) => {
        dispatch({ type: "DELETING_NOTE_REQUEST" });
        fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
            method: 'delete',
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
                type: "DELETE_NOTE",
                note: note
            })
        })
    };
}