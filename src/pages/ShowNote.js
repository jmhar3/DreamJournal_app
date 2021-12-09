import NoteForm from '../components/notes/NoteForm.js';
import ShowNote from '../components/notes/ShowNote.js';
import NotesList from '../components/notes/NotesList.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { fetchNotes } from "../actions/fetchNotes";
import { Link } from "react-router-dom";

const Notepad = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes)

    useEffect(() => {
        dispatch(fetchNotes())
    }, [])

    const { id } = useParams();

    const note = notes.find(note => note.id === parseInt(id))

    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad <Link to="/notes/new">+</Link></h1>
                <NotesList notes={notes}/>
            </section>
            <section id="note-right">
                <ShowNote note={note}/>
            </section>
        </div>
    )
}

export default Notepad;