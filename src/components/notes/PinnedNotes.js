import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const PinnedNotes = ({ notes }) => {
  const pinnedNotes = useMemo(() => {
    const isPinned = notes?.filter((note) => note.pinned === true);
    return notes?.find((note) => note.pinned === true) ? isPinned : null;
  }, [notes]);

  return (
    <ul>
      {pinnedNotes &&
        pinnedNotes.map((note) => {
          return (
            <li key={uuidv4}>
              <Link to={`/notes/${note.id}`}>
                <h1>📝</h1>
                <p>{note.title}</p>
              </Link>
            </li>
          );
        })}
      <li key={uuidv4}>
        <Link to={`/notes/new`}>
          <h1>📝</h1>
          <p>New Note</p>
        </Link>
      </li>
    </ul>
  );
};

export default PinnedNotes;
