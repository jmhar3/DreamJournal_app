const NotesList = ({ notes }) => {
    function showNote(noteData) {
        // console.log(noteData)
    }

    return (
        <>
            {notes.length > 0 ? (
                <ul>
                    {notes.map(note => {
                        return (
                            <li key={note.key} onClick={showNote(note)}>
                                <span>
                                    <h3>{note.title}</h3>
                                    <h3>{note.pinned ? "⭐" : null}</h3>
                                </span>
                                <p className="label">{note.categories ? note.categories.map(category => category.name).join(", ") : null}</p>
                                <p>{note.content}</p>
                            </li>
                        )

                    })}
                </ul>
            ) : <h3>No notes to show.</h3>}
        </>
    )
}

export default NotesList;