import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';

const CategoryForm = ({categories, addCategory, deleteCategory}) => {
    const categoryRef = useRef();

    return (
        <span id="category-input">
            {categories?.length > 0 ? (
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={uuidv4}>
                                {category}
                                <button
                                    onClick={deleteCategory(category)}
                                >✕</button>
                            </li>
                        )
                    })}
                </ul>
            ) : null}
            
            <input type="text" ref={categoryRef} placeholder="Add Category" />
            <button onClick={() => addCategory(categoryRef.current.value)}>+</button>
        </span>
    )
}
  
export default CategoryForm;