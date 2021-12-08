import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const NotesList = ({ notes }) => {
    const { id } = useParams();

    return (
        <>
            {notes.length > 0 ? (
                <ul>
                    {notes.map(note => {
                        return (
                            <li key={note.key} style={{ backgroundColor: (parseInt(id) === note.id ? 'var(--mid)' : 'var(--light-mid)') }}>
                                <span>
                                    <h3><Link to={`/notes/${note.id}`} >{note.title}</Link></h3>
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