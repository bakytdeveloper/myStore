// client/src/components/Home.js
import React from 'react';
import ProductList from './ProductList/ProductList';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        image: 'https://placekitten.com/200/200', // Заглушка, используйте свои изображения
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99,
        image: 'https://placekitten.com/201/201',
    },
    // Добавьте больше товаров по необходимости
];

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Store</h1>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
