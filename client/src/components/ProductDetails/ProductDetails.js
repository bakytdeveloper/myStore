

//
//
// // client/src/components/ProductDetails/ProductDetails.js
// import React, { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import './ProductDetails.css';
//
// const ProductDetails = ({ products, addToCart }) => {
//     const history = useHistory();
//     const { productId } = useParams();
//     const product = products.find((product) => product._id === productId);
//
//     // Получаем сохраненное значение из localStorage при загрузке компонента
//     const [mainImage, setMainImage] = useState(
//         JSON.parse(localStorage.getItem(`mainImage_${productId}`)) ||
//         (product && product.images && product.images.length > 0 ? product.images[0] : null)
//     );
//
//     useEffect(() => {
//         // Сохраняем текущее значение mainImage в localStorage при его изменении
//         localStorage.setItem(`mainImage_${productId}`, JSON.stringify(mainImage));
//     }, [mainImage, productId]);
//
//     if (!product) {
//         return <div className="product-details">Product not found</div>;
//     }
//
//     const { brand, name, price, description, features, images } = product;
//
//     const handleThumbnailClick = (image) => {
//         setMainImage(image);
//     };
//
//     const handleAddToCart = () => {
//         // Тут можно добавить функционал добавления в корзину
//         addToCart(product);
//     };
//
//     return (
//         <div className="product-details">
//             <div className="product-header">
//                 <h2>{name}</h2>
//                 <h3>{brand}</h3>
//                 <button className="close-button" onClick={() => history.goBack()}>
//                     &#10005;
//                 </button>
//             </div>
//             <div className="product-images">
//                 <div className="thumbnails">
//                     {images &&
//                     images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image.url}
//                             alt={`Thumbnail ${index}`}
//                             className={`thumbnail ${mainImage === image ? 'active' : ''}`}
//                             onClick={() => handleThumbnailClick(image)}
//                         />
//                     ))}
//                 </div>
//                 <div className="main-image">
//                     <img src={mainImage ? mainImage.url : ''} alt="Main" />
//                 </div>
//             </div>
//             <div className="product-info">
//                 <p>Price: ${price.toFixed(2)}</p>
//                 <p>Description: {description}</p>
//                 <div className="product-features">
//                     <p>Features:</p>
//                     <ul>
//                         {features &&
//                         features.map((feature, index) => (
//                             <li key={index}>
//                                 {feature.key}: {feature.value}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="product-actions">
//                 <button className="add-to-cart-button" onClick={handleAddToCart}>
//                     Add to Cart
//                 </button>
//                 <button className="buy-now-button">Buy Now</button>
//             </div>
//         </div>
//     );
// };
//
// export default ProductDetails;




import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ products, addToCart }) => {
    const { productId } = useParams();
    const product = products.find((product) => product._id === productId);
    const history = useHistory();

    const [mainImage, setMainImage] = useState(
        JSON.parse(localStorage.getItem(`mainImage_${productId}`)) ||
        (product && product.images && product.images.length > 0 ? product.images[0] : null)
    );

    useEffect(() => {
        localStorage.setItem(`mainImage_${productId}`, JSON.stringify(mainImage));
    }, [mainImage, productId]);

    if (!product) {
        return <div className="product-details">Product not found</div>;
    }

    const { brand, name, price, description, features, images } = product;

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleAddToCart = () => {
        addToCart(product);
        // Дополнительные действия при добавлении в корзину, если необходимо
    };

    return (
        <div className="product-details">
            <div className="product-header">
                <h2>{name}</h2>
                {/*<h3>{brand}</h3>*/}
                <button className="close-button" onClick={() => history.goBack()}>
                    &#10005;
                </button>
            </div>
            <div className="product-content">
                <div className="product-images">
                    <div className="thumbnails">
                        {images &&
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={`Thumbnail ${index}`}
                                className={`thumbnail ${mainImage === image ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={mainImage ? mainImage.url : ''} alt="Main" />
                    </div>
                </div>
                <div className="product-info">
                    <p className="price">${price.toFixed(2)}</p>
                    <p className="description">{description}</p>
                    <div className="product-features">
                        <p className="features-title">Features:</p>
                        <ul>
                            {features &&
                            features.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.key}:</strong> {feature.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-actions">
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;




