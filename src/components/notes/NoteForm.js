import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import CategoryInput from './CategoryInput';
import {postNote} from '../../actions/postNote';
import {patchNote} from '../../actions/patchNote';
import { userId } from "../../Helpers";

const NoteForm = ({note}) => {
    const [state, setState] = useState({
        title: (note === null ? "" : note.title),
        content: (note === null ? "" : note.content)
    })
  
    const pinnedNote = note === null ? false : note.pinned
    const [pinnedState, setPinnedState] = useState(pinnedNote)
    const pin = () => setPinnedState(!pinnedState);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();
    
    const [categories, setCategories] = useState(note === null ? [] : [...note.categories])

    const addCategory = (category) => {
        setCategories((prevCat) => {
            console.log(category)
            return [...prevCat, category]
        })
        console.log(categories)
    }

    const deleteCategory = (category) => {
        setCategories(categories.filter(cat => cat !== category))
    }

    const addNote = () => {
        if (note !== null) {
            dispatch(
                patchNote({
                    ...note
                })
            )
        } else {
            dispatch(
                postNote({
                    user_id: userId,
                    title: state.title,
                    pinned: pinnedState,
                    content: state.content,
                    categories_attributes: categories
                })
            )
        }
    }

    return (
        <div className="form">
            <span>
                <input type="text" value={state.title} onChange={handleChange} placeholder="Title" name="title" />
                <h2 onClick={pin}>{pinnedState ? '⭐️' : '📌'}</h2>
            </span>
            { note ? <p className="label">Last Updated {
                note.updated_at.slice(0, 16).replace("T", " ")
            }</p> : null }
            <CategoryInput addCategory={addCategory} categories={categories} deleteCategory={deleteCategory} />
            <hr />
            <textarea value={state.content} onChange={handleChange}  placeholder="Content" name="content" />
            <button onClick={addNote} className="submit">Save</button>
        </div>
    )
}

export default NoteForm;