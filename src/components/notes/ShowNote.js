import CategoryList from './CategoryList';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {deleteNote} from '../../actions/deleteNote';

const ShowNote = ({note}) => {
    const dispatch = useDispatch();
    
    const destroyNote = () => {
        dispatch(
            deleteNote(
                note
            )
        )
    }

    return (
        <div>
            <span>
                <h1>{note.title}</h1>
                <h1>{note.pinned ? "⭐" : null}</h1>
            </span>
            <CategoryList categories={note.categories} />
            <p className="label">Last Updated {
                note.updated_at.slice(0, 16).replace("T", " ")
            }</p>
            <hr />
            <p>{note.content}</p>
            <div className="show-buttons">
                <Link to={`/notes/${note.id}/edit`}>Edit</Link>
                <button onClick={destroyNote}>Delete</button>
            </div>
            
        </div>
    )
}

export default ShowNote;