import { v4 as uuidv4 } from 'uuid';

const CategoryForm = ({categories}) => {
    return (
        <>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={uuidv4} className="label">
                                {category.name}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </>
    )
}
  
export default CategoryForm;