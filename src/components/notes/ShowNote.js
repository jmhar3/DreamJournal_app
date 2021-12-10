import CategoryList from './CategoryList';
import { Link } from "react-router-dom";

const ShowNote = ({note}) => {
    const deleteNote = () => {
        return "hi"
    }

    return (
        <div>
            <span>
                <h1>{note.title}</h1>
                <h1>{note.pinned ? "⭐" : null}</h1>
            </span>
            <p className="label">Last Updated {
                note.updated_at.slice(0, 16).replace("T", " ")
            }</p>
            <CategoryList categories={note.categories} />
            <hr />
            <p>{note.content}</p>
            <div className="show-buttons">
                <Link to={`/notes/${note.id}/edit`}>Edit</Link>
                <button onClick={deleteNote}>Delete</button>
            </div>
            
        </div>
    )
}

export default ShowNote;