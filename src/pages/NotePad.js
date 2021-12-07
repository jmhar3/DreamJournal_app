import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Notepad = ({notes}) => {
    function showNote(noteData) {
        console.log(noteData)
    }
    
    var note = null;

    const navigate = useNavigate();

    const showForm = () => {
        navigate("/dashboard", { replace: true });
    }

    const pathname = window.location.pathname;
    const show_note = () => pathname === '/notes/show'

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
                <NoteForm style={{ visibility: (show_note ? 'hidden' : 'visible') }}/>
                {note !== null ? <ShowNote style={{ visibility: (show_note ? 'visible' : 'hidden') }}  note={note}/> : null}
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return { notes: state.notes }
}

export default connect(mapStateToProps)(Notepad);