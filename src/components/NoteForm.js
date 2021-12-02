import { useRef } from "react"
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = () => {
    const titleRef = useRef();
    const pinnedRef = useRef();
    const contentRef = useRef();

    const dispatch = useDispatch();

    const addNote = () => {
        dispatch({
            type: "ADD_NOTE",
            note: {
                key: uuidv4(),
                label: titleRef.current.value,
                due_date: pinnedRef.current.value,
                priority: contentRef.current.value
            }
        }) 
    }

    return (
        <div className="form">
            <span>
                <input type="text" ref={titleRef} placeholder="Title" />
                <div id="checkbox-container">
                    <input id="checkbox" type="checkbox" ref={pinnedRef}/>
                    <label for="checkbox" ></label>
                </div>
            </span>
            <p className="label">Last Updated 25th November 2021</p>
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

export default NoteForm;