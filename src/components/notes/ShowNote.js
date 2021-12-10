import CategoryList from './CategoryList';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {deleteNote} from '../../actions/deleteNote';

const ShowNote = ({note}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                <button onClick={() => {
                    dispatch(
                        deleteNote(
                            note
                        )
                    )
                    navigate('/notes', { replace: true})
                    // window.location.reload();
                }}>Delete</button>
            </div>
            
        </div>
    )
}

export default ShowNote;