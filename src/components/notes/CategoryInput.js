import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";


const CategoryInput = ({ categories, addCategory, deleteCategory }) => {

    const [categoryInput, setCategoryInputState] = useState("")

    // const [categoryState, setCategoryState] = useState({})

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/v1/categories", {
    //         method: 'get',
    //         headers: {
    //             'content-type': 'application/json',
    //             'accept': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(categoryData => setCategoryState(categoryData))
    // })

    // console.log(categoryState)

    const handleChange = (e) => setCategoryInputState(e.target.value)
console.log(categories)
    return (
        <span id="category-input">
            {categories?.length > 0 ? (
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={uuidv4}>
                                {category.name || category}
                                <button
                                    onClick={() => deleteCategory(category)}
                                >✕</button>
                            </li>
                        )
                    })}
                </ul>
            ) : null}

            <input type="text" placeholder="Add Category" value={categoryInput} onChange={handleChange} />
            <button onClick={() => {
                setCategoryInputState("")
                addCategory(categoryInput)
            }}>+</button>
        </span>
    )
}

export default CategoryInput;