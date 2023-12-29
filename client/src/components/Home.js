// client/src/components/Home.js
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList/ProductList';

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Запрос к API для получения продуктов
        fetch('http://localhost:5500/api/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data received:', data); // Добавьте эту строку
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to My Store</h1>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default Home;
