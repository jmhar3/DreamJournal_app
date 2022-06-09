import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const CategoryInput = ({ categories, addCategory, deleteCategory }) => {
  const [categoryInput, setCategoryInputState] = useState("");

  const handleChange = (e) => setCategoryInputState(e.target.value);

  return (
    <span id="category-input">
      {categories?.length > 0 ? (
        <ul>
          {categories.map((category) => {
            return (
              <li key={uuidv4}>
                {category.name || category}
                <button onClick={() => deleteCategory(category)}>✕</button>
              </li>
            );
          })}
        </ul>
      ) : null}

      <input
        type="text"
        placeholder="Add Category"
        value={categoryInput}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          setCategoryInputState("");
          addCategory(categoryInput);
        }}
      >
        +
      </button>
    </span>
  );
};

export default CategoryInput;
