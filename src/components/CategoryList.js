const CategoryForm = ({categories}) => {
    return (
        <>
            {categories.length < 0 ? (
                <ul>
                    {categories.map((category) => {
                        <li key={category.key}>
                            {category.label}
                        </li>
                    })}
                </ul>
            ) : null}
        </>
    )
}
  
export default CategoryForm;