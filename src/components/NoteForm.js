import { useForm } from 'react-hook-form';

const NewForm = () => {
    const {register, handleSubmit} = useForm();

    async function onSubmit(d) {

    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" value="Save" className="button" />
    </form>
    )
}

export default NewForm;