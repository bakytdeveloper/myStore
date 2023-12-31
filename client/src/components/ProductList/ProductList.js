// // client/src/components/ProductList/ProductList.js
// import React from 'react';
// import ProductCard from "../ProductCard/ProductCard";
// import './ProductList.css';
//
// const ProductList = ({ products, addToCart }) => {
//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 <ProductCard
//                     key={product._id}
//                     images={product.images}
//                     brand={product.brand}
//                     name={product.name}
//                     price={product.price}
//                     addToCart={() => addToCart(product)}
//                 />
//             ))}
//         </div>
//     );
// };
//
// export default ProductList;





// // client/src/components/ProductList/ProductList.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // Добавлено
// import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css';
//
// const ProductList = ({ products, addToCart }) => {
//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 // <Link key={product._id} to={`/product/${product._id}`}>
//                 //      Обертываем каждую карточку в Link
//                     <ProductCard
//                         images={product.images}
//                         brand={product.brand}
//                         name={product.name}
//                         price={product.price}
//                         addToCart={() => addToCart(product)}
//                     />
//                 // </Link>
//             ))}
//         </div>
//     );
// };
//
// export default ProductList;





// client/src/components/ProductList/ProductList.js
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}  // Передаем в ProductCard весь объект product
                    addToCart={() => addToCart(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;
