import { v4 as uuidv4 } from 'uuid';

const PinnedNotes = ({ notes }) => {

    function isPinned(note) {
        return note.pinned === true;
    }

    const pinnedNotes = notes.filter(isPinned);
console.log(pinnedNotes);
    return (
        <ul>
            {pinnedNotes.map(note => {
                return (
                    <li key={uuidv4}>
                        <h1>📝</h1>
                        <p>{note.title}</p>
                    </li>
                )

            })}
        </ul>
    )
}

export default PinnedNotes;