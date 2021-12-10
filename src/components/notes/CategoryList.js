const CategoryForm = ({categories}) => {
    return (
        <>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={category.id} className="label">
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