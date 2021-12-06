import CategoryList from './CategoryList';

const ShowNote = ({note}) => {
    return (
        <div>
            <span>
                <h1>{note.title}</h1>
                <h1>{note.pinned ? "⭐" : null}</h1>
            </span>
            <p className="label">Last Updated {note.lastUpdated}</p>
            <CategoryList categories={note.categories} />
            <hr />
            <p>{note.content}</p>
        </div>
    )
}

export default ShowNote;