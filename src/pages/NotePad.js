import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import NotesList from '../components/notes/NotesList.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchNotes } from "../actions/fetchNotes";
import { Link } from "react-router-dom";

const Notepad = () => {
    const notes = useSelector(state => state.notes)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNotes())
    }, [])

    const { id } = useParams();

    var note = null;
    if (id) note = notes.find(note => note.id === parseInt(id))

    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad <Link to="/notes/new">+</Link></h1>
                <NotesList notes={notes}/>
            </section>
            <section id="note-right">
                {note ? <ShowNote note={note}/> : <NoteForm/>}
            </section>
        </div>
    )
}

export default Notepad;