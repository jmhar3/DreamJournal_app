import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import { useState } from 'react';
import { connect } from 'react-redux';

const Notepad = ({notes}) => {

    const [displayNote, setDisplayNote] = useState(false)
    const [note, setNote] = useState(null)

    function showNote(noteData) {
        setNote(noteData);
        setDisplayNote(true);
    }

    const showForm = () => {setDisplayNote(false)}

    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad <button onClick={showForm} className="button">+</button></h1>
                { notes.length > 0 ? (
                    <ul>
                        {notes.map(note => {
                            <li key={note.key} onClick={showNote(note)}>
                                <span>
                                    <h3>{note.label}</h3>
                                    <h3>{note.pinned ? "⭐" : null}</h3>
                                </span>
                                <p className="label">{note.categories.join(", ")}</p>
                                <p>{note.content}</p>
                            </li>
                        })}
                    </ul>
                ) : <h3>No notes to show.</h3> }
            </section>
            <section id="note-right">
                <NoteForm style={{ visibility: (displayNote ? 'hidden' : 'visible') }}/>
                { note !== null ? <ShowNote style={{ visibility: (displayNote ? 'visible' : 'hidden') }}  note={note}/> : null }
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return { notes: state.notes }
}

export default connect(mapStateToProps)(Notepad);