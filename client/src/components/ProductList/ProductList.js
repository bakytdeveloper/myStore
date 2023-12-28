// client/src/components/ProductList/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
