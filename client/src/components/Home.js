// // client/src/components/Home.js
// import React, { useEffect, useState } from 'react';
// import ProductList from './ProductList/ProductList';
//
// const Home = ({ addToCart }) => {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         // Запрос к API для получения продуктов
//         fetch('http://localhost:5500/api/products')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log('Data received:', data); // Добавьте эту строку
//                 setProducts(data);
//             })
//             .catch((error) => console.error('Error fetching products:', error));
//     }, []);
//
//     return (
//         <div>
//             <h1>Welcome to My Store</h1>
//             <ProductList products={products} addToCart={addToCart} />
//         </div>
//     );
// };
//
// export default Home;






// // client/src/components/Home.js
// import React, { useEffect, useState } from 'react';
// import ProductList from './ProductList/ProductList';
// import Sidebar from './Sidebar/Sidebar';
//
// const Home = ({ addToCart }) => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [names, setNames] = useState([]);
//
//     useEffect(() => {
//         // Запрос к API для получения продуктов
//         fetch('http://localhost:5500/api/products')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log('Data received:', data);
//                 setProducts(data);
//                 setFilteredProducts(data);
//                 const uniqueCategories = [...new Set(data.map((product) => product.category))];
//                 const uniqueNames = [...new Set(data.map((product) => product.name))];
//                 setCategories(uniqueCategories);
//                 setNames(uniqueNames);
//             })
//             .catch((error) => console.error('Error fetching products:', error));
//     }, []);
//
//     const filterByCategory = (category) => {
//         const filtered = products.filter((product) => product.category === category);
//         setFilteredProducts(filtered);
//     };
//
//     const filterByName = (name) => {
//         const filtered = products.filter((product) => product.name === name);
//         setFilteredProducts(filtered);
//     };
//
//     const showAll = () => {
//         setFilteredProducts(products);
//     };
//
//     return (
//         <div className="home-container">
//             <Sidebar
//                 categories={categories}
//                 names={names}
//                 filterByCategory={filterByCategory}
//                 filterByName={filterByName}
//                 showAll={showAll}
//             />
//             <div className="product-container">
//                 <h1>Welcome to My Store</h1>
//                 <ProductList products={filteredProducts} addToCart={addToCart} />
//             </div>
//         </div>
//     );
// };
//
// export default Home;




// client/src/components/Home.js
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList/ProductList';
import Sidebar from './Sidebar/Sidebar';

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [namesByCategory, setNamesByCategory] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);

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
                setProducts(data);
                setFilteredProducts(data);
                const uniqueCategories = [...new Set(data.map((product) => product.category))];
                const uniqueNamesByCategory = {};
                uniqueCategories.forEach((category) => {
                    const namesInCategory = [...new Set(data.filter((product) => product.category === category).map((product) => product.name))];
                    uniqueNamesByCategory[category] = namesInCategory;
                });
                setCategories(uniqueCategories);
                setNamesByCategory(uniqueNamesByCategory);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const filterByName = (name) => {
        const filtered = products.filter((product) => product.name === name);
        setFilteredProducts(filtered);
    };

    const showAll = () => {
        setSelectedCategory(null);
        setFilteredProducts(products);
    };

    return (
        <div className="home-container">
            {/*<Sidebar*/}
            {/*    categories={categories}*/}
            {/*    namesByCategory={namesByCategory}*/}
            {/*    filterByCategory={filterByCategory}*/}
            {/*    filterByName={filterByName}*/}
            {/*    showAll={showAll}*/}
            {/*/>*/}
            <div className="product-container">
                <Sidebar
                    categories={categories}
                    namesByCategory={namesByCategory}
                    filterByCategory={filterByCategory}
                    filterByName={filterByName}
                    showAll={showAll}
                />

                <ProductList products={filteredProducts} addToCart={addToCart} />
            </div>
        </div>
    );
};

export default Home;








