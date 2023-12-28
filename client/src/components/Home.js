// client/src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Получение списка продуктов при загрузке компонента
        axios.get('http://localhost:5500/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to My Shop</h1>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Features: {product.features}</p>
                        <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
