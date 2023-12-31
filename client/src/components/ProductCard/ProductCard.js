// // client/src/components/ProductList/ProductCard.js
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ brand, name, price, images, addToCart }) => {
//     return (
//         <div className="product-card">
//             {images && images.length > 0 && (
//                 <img src={images[0].url} alt={`${brand} ${name}`} />
//             )}
//
//             <h3>{brand}</h3>
//             <h3>{name}</h3>
//             <p>Цена: ${price.toFixed(2)}</p>
//             <div className="b-button">
//             <button onClick={addToCart}>Корзина</button>
//             <button>Купить</button>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;



// // client/src/components/ProductList/ProductCard.js
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ brand, name, price, images, addToCart }) => {
//     return (
//         <div className="product-card">
//             {images && images.length > 0 && (
//                 <img src={images[0].url} alt={`${brand} ${name}`} />
//             )}
//
//             <h3>{brand}</h3>
//             <h3>{name}</h3>
//             <p>Цена: ${price.toFixed(2)}</p>
//             <div className="b-button">
//                 <button onClick={addToCart}>Корзина</button>
//                 <button onClick={() => console.log('Купить')}>Купить</button>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;



// client/src/components/ProductList/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    const { _id, brand, name, price, images } = product;

    return (
        <div className="product-card">
            <Link to={`/product/${_id}`}>
            {images && images.length > 0 && (
                <img src={images[0].url} alt={`${brand} ${name}`} />
            )}

            <h3>{brand}</h3>
            <h3>{name}</h3>
            <p>Цена: ${price.toFixed(2)}</p>
            </Link>
            <div className="b-button">
                <button onClick={addToCart}>Корзина</button>

                    <button onClick={() => console.log('Купить')}>Купить</button>

            </div>
        </div>
    );
};

export default ProductCard;








