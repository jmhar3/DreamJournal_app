const NewNote = () => {
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    const hours = dateTime.getHours() + 1
    const minutes = dateTime.getMinutes() + 1
    const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    function hideNewNote(e) {
        e.preventDefault();
        const newNote = document.getElementById('new-note');
        newNote.style.display = 'none';
    }

    return (
        <div id="new-note">
            <section>
                <h1>Notepad</h1>
            </section>
            <section>
                <form>
                    <input type="text" name="title" placeholder="Title" />
                    <textarea value="Content" />
                    <label>
                        <input type="checkbox" /> Pin Note
                    </label>
                    <input type="submit" value="Lets go!" />
                </form>
            </section>
        </div>
    )
}

export default NewNote;