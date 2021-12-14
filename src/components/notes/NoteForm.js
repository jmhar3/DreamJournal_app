import { useState } from "react";
import { useDispatch } from 'react-redux';
import CategoryInput from './CategoryInput';
import {postNote} from '../../actions/postNote';
import {patchNote} from '../../actions/patchNote';
import { userId } from "../../Helpers";
import { useNavigate } from "react-router-dom";

const NoteForm = ({note}) => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        title: note?.title || "",
        content: note?.content || "",
        pinned: note?.pinned || false,
        categories: note ? [...note.categories] : []
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
  
    const pin = () => setState({...state, pinned: !state.pinned});

    const addCategory = (category) => {
        setState({
            ...state,
            categories: [...state.categories, category]
        })
    }

    const deleteCategory = (category) => {
        setState({
            ...state,
            categories: (state.categories.filter(cat => cat !== category))
        })
    }

    const dispatch = useDispatch();

    const addNote = () => {
        if (note) {
            dispatch(
                patchNote({
                    ...note,
                    ...state,
                    categories_attributes: state.categories.map(cat => cat.name || cat),
                })
            )
            navigate(`/notes/${note.id}`, { replace: true})
        } else {
            dispatch(
                postNote({
                    user_id: userId,
                    ...state,
                    categories_attributes: state.categories.map(cat => cat.name || cat),
                })
            )
        }
    }

    return (
        <div className="form">
            <span>
                <input type="text" value={state.title} onChange={handleChange} placeholder="Title" name="title" />
                <h2 onClick={pin}>{state.pinned ? '⭐️' : '📌'}</h2>
            </span>
            { note ? <p className="label">Last Updated {
                note.updated_at.slice(0, 16).replace("T", " ")
            }</p> : null }
            <CategoryInput addCategory={addCategory} categories={state.categories} deleteCategory={deleteCategory} />
            <hr />
            <textarea value={state.content} onChange={handleChange}  placeholder="Content" name="content" />
            <button onClick={addNote} className="submit">Save</button>
        </div>
    )
}

export default NoteForm;