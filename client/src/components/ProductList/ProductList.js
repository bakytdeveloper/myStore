// client/src/components/ProductList/ProductList.js
import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    images={product.images}
                    brand={product.brand}
                    name={product.name}
                    price={product.price}
                    addToCart={() => addToCart(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;
