function noteReducer (notes = [], action) {
    switch (action.type) {
        case "DELETING_NOTE_REQUEST":
            return notes
        case "POSTING_NOTE_REQUEST":
            return notes
        case "START_ADDING_NOTES_REQUEST":
            return notes
        case "ADD_NOTES":
            console.log(action)
            return [...action.notes]
        case "ADD_NOTE":
            return [...notes, action.note]
        case "DELETE_NOTE":
            return notes.filter(note => action.note !== note)
        case "UPDATE_NOTE":
            return notes.map((note) => {
                if (note.id === action.note.id) {
                    note = action.note
                }
                return note
            })
        case "ADD_NOTE_CATEGORY":
            return notes.map((note) => {
                if (note.id === action.note.id) {
                    note.categories = [...note.categories, action.note.category]
                }
                return note
            })
        default:
            return notes;
    }
}

export default noteReducer;