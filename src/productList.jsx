// that is productList.jsx
import React from 'react';

function ProductList({ products }) {
  console.log("Rendering products:", products); 
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          {/* <p>{product.description}</p> */}
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
