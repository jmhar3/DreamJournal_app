import { v4 as uuidv4 } from 'uuid';

const CategoryList = ({categories}) => {
    return (
        <>
            {categories.length > 0 ? (
                <ul id="category-list">
                    {categories.map((category) => {
                        return (
                            <li key={uuidv4} className="label">
                                {category.name || category}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </>
    )
}
  
export default CategoryList;