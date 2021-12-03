const ShowNote = ({note}) => {
    return (
        <div>
            <span>
                <h1>{note.title}</h1>
                <h1>{note.pinned ? "⭐" : null}</h1>
            </span>
            <p className="label">Last Updated {note.lastUpdated}</p>
            {note.categories.length < 0 ? (
                <ul>
                    {note.categories.map((category) => {
                        <li key={category.key}>
                            {category.label}
                        </li>
                    })}
                </ul>
            ) : null}
            <hr />
            <p>{note.content}</p>
        </div>
    )
}

export default ShowNote;