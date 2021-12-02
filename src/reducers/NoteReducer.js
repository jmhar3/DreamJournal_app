function noteReducer (notes = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, action.note]
        case "DELETE_NOTE":
            return notes.filter(note => action.note !== note)
        case "UPDATE_NOTE":
            return notes.map((note) => {
                if (note === action.note.oldNote) {
                    note = action.note.newNote
                }
                return note
            })
        default:
            return notes;
    }
}

export default noteReducer;