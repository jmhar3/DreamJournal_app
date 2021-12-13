import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import CategoryList from "./CategoryList";

const NotesList = ({ notes }) => {
    const { id } = useParams();

    // const noteCategories = (note) => note.categories ? note.categories.map(category => category.name).join(", ") : null;

    const selectedNote = (note) => parseInt(id) === note.id;

    return (
        <>
            {notes.length > 0 ? (
                <ul>
                    {notes.map(note => {
                        return (
                            <li key={uuidv4}
                                style={{
                                    backgroundColor:
                                    ( selectedNote(note) ?
                                    'var(--mid)' : 'var(--light-mid)')
                                }}>
                                <span>
                                    <h3><Link to={`/notes/${note.id}`} >{note.title}</Link></h3>
                                    <h3>{note.pinned ? "⭐" : null}</h3>
                                </span>
                                <p>
                                    {note.content.length > 60 ? `${note.content.slice(0, 57)}...` : note.content}
                                </p>
                                {/* <p className="label">{noteCategories(note)}</p> */}
                                <span>
                                    <CategoryList categories={note.categories} />
                                </span>
                            </li>
                        )

                    })}
                </ul>
            ) : <h3>No notes to show.</h3>}
        </>
    )
}

export default NotesList;