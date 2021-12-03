import { useRef } from "react"
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const CategoryForm = ({categories}) => {
    const categoryRef = useRef();

    const dispatch = useDispatch();

    const addCategory = () => {
        dispatch({
            type: "ADD_CATEGORY",
            category: {
                key: uuidv4(),
                label: categoryRef.current.value
            }
        }) 
    }

    const deleteCategory = (catKey) => {
        dispatch({
            type: "DELETE_CATEGORY",
            key: catKey
        }) 
    }

    return (
        <span id="category-input">
            {/* {categories.length < 0 ? (
                <ul>
                    {categories.map((category) => {
                        <li key={category.key}>
                            {category.label}
                            <button
                                onClick={deleteCategory(category.key)}
                            >x</button>
                        </li>
                    })}
                </ul>
            ) : null} */}
            <ul>
                <li>Food<button>x</button></li>
                <li>Snacks<button>x</button></li>
                <li>Dessert<button>x</button></li>
            </ul>
            
            <input type="text" ref={categoryRef} placeholder="Add Category" />
            <button onClick={addCategory}>+</button>
        </span>
    )
}

const mapDispatchToProps = dispatch => ({
    addCategory: (category) => dispatch({
        type: "ADD_CATEGORY",
        category
    }),
    deleteCategory: (key) => dispatch({
        type: "DELETE_CATEGORY",
        key
    })
})

const mapStateToProps = state => {
    return { categories: state.categories }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);