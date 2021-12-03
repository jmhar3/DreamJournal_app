import { useRef, useState } from "react"
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Categories from './CategoryInput';

const NoteForm = ({categories}) => {
    const titleRef = useRef();
    const contentRef = useRef();

    const [pinnedState, setPinnedState] = useState(false)
    const pin = () => {
        setPinnedState(!pinnedState);
    }

    const dispatch = useDispatch();

    const addNote = () => {
        dispatch({
            type: "ADD_NOTE",
            note: {
                key: uuidv4(),
                label: titleRef.current.value,
                pinned: pinnedState,
                content: contentRef.current.value,
                categories: categories
            }
        }) 
    }

    return (
        <div className="form">
            <span>
                <input type="text" ref={titleRef} placeholder="Title" />
                <div id="checkbox-container">
                    <input id="checkbox" type="checkbox" onClick={pin} />
                    <label for="checkbox" ></label>
                </div>
            </span>
            {/* <p className="label">Last Updated 25th November 2021</p> */}
            <Categories />
            <hr />
            <textarea ref={contentRef} placeholder="Content" />
            <button onClick={addNote} className="submit">Submit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNote: (note) => dispatch({
        type: "ADD_NOTE",
        note
    })
})

const mapStateToProps = state => {
    return { categories: state.categories }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);