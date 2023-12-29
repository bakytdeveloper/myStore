// client/src/components/ProductDetails/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ products, addToCart }) => {
    const { productId } = useParams();
    const product = products.find((item) => item.id === parseInt(productId));

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-details-container">
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
