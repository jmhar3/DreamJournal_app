function noteReducer (notes = [], action) {
    switch (action.type) {
        case "POSTING_NOTE_REQUEST":
            return notes
        case "START_ADDING_GOALS_REQUEST":
            return notes
        case "ADD_NOTES":
            return [...notes, ...action.notes]
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