import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const PinnedNotes = ({notes}) => {
    function isPinned(note) {
        return note.pinned === true;
    }

    const pinnedNotes = notes.filter(isPinned)

    return (
        <div>
            {pinnedNotes.length < 0 ? (
                <ul>
                    {pinnedNotes.map(note => {
                        <li key={note.key}>
                            <h1>📝</h1>
                            <p>{note.label}</p>
                            <p class="label">{note.categories}</p>
                        </li>
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default PinnedNotes;