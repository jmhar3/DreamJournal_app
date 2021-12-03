function categoryReducer (categories = [], action) {
    switch (action.type) {
        case "ADD_CATEGORY":
            return [...categories, action.category]    
        case "REPLACE_CATEGORIES":
            return [action.categories]
        case "DELETE_CATEGORY":
            return categories.filter(category => action.key !== category.key)
        default:
            return categories;
    }
}

export default categoryReducer;