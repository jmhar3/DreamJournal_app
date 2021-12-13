import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const PinnedNotes = ({ notes }) => {

    const isPinned = (note) => note.pinned === true;

    const pinnedNotes = notes.filter(isPinned);

    return (
        <ul>
            {pinnedNotes.map(note => {
                return (
                    <li key={uuidv4}>
                        <Link to={`/notes/${note.id}`} >
                            <h1>📝</h1>
                            <p>{note.title}</p>
                        </Link>
                    </li>
                )

            })}
        </ul>
    )
}

export default PinnedNotes;