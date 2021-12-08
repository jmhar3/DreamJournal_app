import CategoryList from './CategoryList';

const ShowNote = ({note}) => {
    return (
        <div>
            <span>
                <h1>{note.title}</h1>
                <h1>{note.pinned ? "⭐" : null}</h1>
            </span>
            <p className="label">Last Updated {
                note.updated_at.slice(0, 10) + " " + note.updated_at.slice(11, 16)
            }</p>
            <CategoryList categories={note.categories} />
            <hr />
            <p>{note.content}</p>
        </div>
    )
}

export default ShowNote;