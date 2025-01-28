// that is categoryList.jsx
import React from 'react';

function CategoryList({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-item ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
