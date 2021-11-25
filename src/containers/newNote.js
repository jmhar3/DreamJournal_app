const NewNote = () => {
    // const dateTime = new Date()
    // const day = dateTime.getDate()
    // const month = dateTime.getMonth() + 1
    // const year = dateTime.getFullYear()
    // const hours = dateTime.getHours() + 1
    // const minutes = dateTime.getMinutes() + 1
    // const today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes

    return (
        <div id="note">
            <section id="note-left">
                <h1>Notepad</h1>
                <div>
                    <p className="label">24.11.21</p>
                    <h3>Groceries</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </section>
            <section id="note-right">
                <form>
                    <span>
                        <input type="text" name="title" placeholder="Title" />
                        <div id="checkbox-container">
                            <input id="checkbox" type="checkbox"/>
                            <label for="checkbox" ></label>
                        </div>
                    </span>
                    <p className="label">Last Updated 25th November 2021</p>
                    <hr />
                    <textarea value="Content" />
                    <input type="submit" value="Submit" className="button" />
                </form>
            </section>
        </div>
    )
}

export default NewNote;