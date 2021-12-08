const PinnedNotes = ({notes}) => {
    
    function isPinned(note) {
        return note.pinned === true;
    }

    const pinnedNotes = notes.filter(isPinned)
console.log(pinnedNotes)
    return (
        <>
            {pinnedNotes.length > 0 ? (
                <ul>
                    {pinnedNotes.map(note => {
                        return (
                            <li key={note.key}>
                                <h1>📝</h1>
                                <p>{note.title}</p>
                                <p class="label">{note.categories}</p>
                            </li>
                        )
                        
                    })}
                </ul>
            ) : null}
        </>
    )
}

export default PinnedNotes;