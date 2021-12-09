import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const CategoryForm = ({categories, addCategory, deleteCategory}) => {
    const [category, setCategory] = useState("")

    function handleChange(e) {
        setCategory(e.target.value)
    }

    return (
        <span id="category-input">
            {categories?.length > 0 ? (
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={uuidv4}>
                                {category}
                                <button
                                    onClick={() => deleteCategory(category)}
                                >✕</button>
                            </li>
                        )
                    })}
                </ul>
            ) : null}
            
            <input type="text" onChange={handleChange} value={category} placeholder="Add Category" />
            <button onClick={() => addCategory(category)}>+</button>
        </span>
    )
}
  
export default CategoryForm;