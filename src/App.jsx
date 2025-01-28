import React, { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import categories from "./fake-data/all-categories"; 
import products from "./fake-data/all-products"; 

 const normalize = (str) => (str ? str.replace("FAKE: ", "").trim().toLowerCase() : "");

 const getFilteredProducts = (category) => {
    const normalizedCategory = normalize(category);
    return products.filter(
      (product) => normalize(product.category) === normalizedCategory
    );
  };

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const newFilteredProducts = getFilteredProducts(category);
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="App">
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;

