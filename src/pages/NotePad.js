import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import NotesList from '../components/notes/NotesList.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { fetchNotes } from "../actions/fetchNotes";

const Notepad = () => {
    const notes = useSelector(state => state.notes)
    const sortedNotes = notes.sort((a, b) => new Date(b.updated_at.slice(0, 10)) - new Date(a.updated_at.slice(0, 10)))
console.log(sortedNotes)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNotes())
    }, [])

    const { id } = useParams();

    var note = null;
    if (id) note = notes.find(note => note.id === parseInt(id))

    const pathname = window.location.pathname;
    
    const hideNote = pathname.includes("edit") || !id;

    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad <Link to="/notes/new">+</Link></h1>
                <NotesList notes={sortedNotes}/>
            </section>
            <section id="note-right">
                { hideNote ? <NoteForm note={note} /> : <ShowNote note={note}/> }
            </section>
        </div>
    )
}

export default Notepad;