import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchNotes } from "../actions/fetchNotes";

const Notepad = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes)
    
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

    useEffect(() => {
        dispatch(fetchNotes())
    }, [])
    console.log(notes)
    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad <button onClick={showForm} className="button">+</button></h1>
                { notes.length > 0 ? (
                    <ul>
                        {notes.map(note => {
                            return (
                                <li key={note.key} onClick={showNote(note)}>
                                    <span>
                                        <h3>{note.label}</h3>
                                        <h3>{note.pinned ? "⭐" : null}</h3>
                                    </span>
                                    <p className="label">{note.categories.map(category => category.name).join(", ")}</p>
                                    <p>{note.content}</p>
                                </li>
                            )
                            
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

export default Notepad;