import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";

const NotesList = ({ notes }) => {
  const { id } = useParams();

  const noteCategories = useCallback((note) => {
    note.categories && note.categories.map((cat) => cat.name || cat).join(", ")
  }, []);

  const selectedNote = (note) => parseInt(id) === note.id;

  return (
    <>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => {
            return (
              <li
                key={uuidv4}
                style={{
                  backgroundColor: selectedNote(note)
                    ? "var(--mid)"
                    : "var(--light-mid)",
                }}
              >
                <span>
                  <h3>
                    <Link to={`/notes/${note.id}`}>{note.title}</Link>
                  </h3>
                  <h3>{note.pinned ? "⭐" : null}</h3>
                </span>
                <p>
                  {note.content.length > 50
                    ? `${note.content.slice(0, 50)}...`
                    : note.content}
                </p>
                <p className="label">{noteCategories(note)}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No notes to show.</h3>
      )}
    </>
  );
};

export default NotesList;
