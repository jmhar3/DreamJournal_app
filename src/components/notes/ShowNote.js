import CategoryList from "./CategoryList";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../actions/deleteNote";
import { useCallback } from "react";

const ShowNote = ({ note }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = useCallback(() => {
    dispatch(deleteNote(note));
    navigate("/notes", { replace: true });
    window.location.reload();
  }, [dispatch, deleteNote, note, navigate]);

  return (
    <div>
      <span>
        <h1>{note.title}</h1>
        <h1>{note.pinned ? "⭐" : null}</h1>
      </span>
      <p className="label">
        Last Updated {note.updated_at.slice(0, 16).replace("T", " ")}
      </p>
      <CategoryList categories={note.categories} />
      <hr />
      <p>{note.content}</p>
      <div className="show-buttons">
        <Link to={`/notes/${note.id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ShowNote;
