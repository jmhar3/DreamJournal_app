import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Categories from './CategoryInput';
import {postNote} from '../../actions/postNote';
import { userId } from "../../Helpers";

const NoteForm = () => {
    const titleRef = useRef();
    const contentRef = useRef();

    const [categories, setCategories] = useState([])

    const [pinnedState, setPinnedState] = useState(false)
    const pin = () => setPinnedState(!pinnedState);

    const dispatch = useDispatch();

    const addCategory = (category) => {
        setCategories([...categories, category])
    }

    const deleteCategory = (cat) => {
        setCategories(categories.filter(category => cat !== category))
    }

    const addNote = () => {
        dispatch(
            postNote({
                user_id: userId,
                title: titleRef.current.value,
                pinned: pinnedState,
                content: contentRef.current.value,
                categories_attributes: categories
            })
        )
    }

    return (
        <div className="form">
            <span>
                <input type="text" ref={titleRef} placeholder="Title" />
                <h2 onClick={pin}>{pinnedState ? '⭐️' : '📌'}</h2>
            </span>
            {/* <p className="label">Last Updated 25th November 2021</p> */}
            <Categories addCategory={addCategory} categories={categories} deleteCategory={deleteCategory} />
            <hr />
            <textarea ref={contentRef} placeholder="Content" />
            <button onClick={addNote} className="submit">Save</button>
        </div>
    )
}

export default NoteForm;