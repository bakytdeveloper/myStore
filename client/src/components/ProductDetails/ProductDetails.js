

//
//
// // client/src/components/ProductDetails/ProductDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import './ProductDetails.css';
//
// const ProductDetails = ({ products, addToCart }) => {
//     const { productId } = useParams();
//     const history = useHistory();
//     const product = products.find((product) => product._id === productId);
//
//     const [mainImage, setMainImage] = useState(
//         JSON.parse(localStorage.getItem(`mainImage_${productId}`)) ||
//         (product && product.images && product.images.length > 0 ? product.images[0] : null)
//     );
//
//     useEffect(() => {
//         localStorage.setItem(`mainImage_${productId}`, JSON.stringify(mainImage));
//     }, [mainImage, productId]);
//
//     const handleThumbnailClick = (image) => {
//         setMainImage(image);
//     };
//
//     const handleAddToCart = () => {
//         addToCart(product);
//         // Добавьте здесь дополнительные действия, если необходимо
//     };
//
//     if (!product) {
//         return <div className="product-details">Product not found</div>;
//     }
//
//     const { brand, name, price, description, features, images } = product;
//
//     return (
//         <div className="product-details">
//             <div className="product-header">
//                 <div className="product-title">
//                     <h2>{name}</h2>
//                     <h3>{brand}</h3>
//                 </div>
//                 <button className="close-button" onClick={() => history.goBack()}>
//                     &#10005;
//                 </button>
//             </div>
//             <div className="product-content">
//                 <div className="product-images">
//                     <div className="thumbnails">
//                         {images &&
//                         images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image.url}
//                                 alt={`Thumbnail ${index}`}
//                                 className={`thumbnail ${mainImage === image ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(image)}
//                             />
//                         ))}
//                     </div>
//                     <div className="main-image">
//                         <img src={mainImage ? mainImage.url : ''} alt="Main" />
//                     </div>
//                 </div>
//                 <div className="product-info">
//                     <div className="description-box">
//                         <h4>Описание</h4>
//                         <p>{description}</p>
//                     </div>
//                     <p className="price">Цена: ${price.toFixed(2)}</p>
//                     <div className="product-features">
//                         <h4>Характеристики:</h4>
//                         <ul>
//                             {features &&
//                             features.map((feature, index) => (
//                                 <li key={index}>
//                                     {feature.key}: {feature.value}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="product-actions">
//                 <button className="add-to-cart-button" onClick={handleAddToCart}>
//                     Добавить в корзину
//                 </button>
//                 <button className="buy-now-button">Купить сейчас</button>
//             </div>
//         </div>
//     );
// };
//
// export default ProductDetails;








// // client/src/components/ProductDetails/ProductDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import './ProductDetails.css';
//
// const ProductDetails = ({ products, addToCart }) => {
//     const { productId } = useParams();
//     const history = useHistory();
//     const product = products.find((product) => product._id === productId);
//
//     const [mainImage, setMainImage] = useState(
//         JSON.parse(localStorage.getItem(`mainImage_${productId}`)) ||
//         (product && product.images && product.images.length > 0 ? product.images[0] : null)
//     );
//
//     useEffect(() => {
//         localStorage.setItem(`mainImage_${productId}`, JSON.stringify(mainImage));
//     }, [mainImage, productId]);
//
//     const handleThumbnailClick = (image) => {
//         setMainImage(image);
//     };
//
//     const handleAddToCart = () => {
//         addToCart(product);
//         // Добавьте здесь дополнительные действия, если необходимо
//     };
//
//     if (!product) {
//         return <div className="product-details">Product not found</div>;
//     }
//
//     const { brand, name, price, description, features, images } = product;
//
//     return (
//         <div className="product-details">
//             <div className="product-header">
//                 <div className="product-title">
//                     <h2>{name}</h2>
//                     <h3>{brand}</h3>
//                 </div>
//                 <button className="close-button" onClick={() => history.goBack()}>
//                     &#10005;
//                 </button>
//             </div>
//             <div className="product-content">
//                 <div className="product-images">
//                     <div className="thumbnails">
//                         {images &&
//                         images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image.url}
//                                 alt={`Thumbnail ${index}`}
//                                 className={`thumbnail ${mainImage === image ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(image)}
//                             />
//                         ))}
//                     </div>
//                     <div className="main-image">
//                         <img src={mainImage ? mainImage.url : ''} alt="Main" />
//                     </div>
//                 </div>
//                 <div className="product-info">
//                     <div className="description-box">
//                         <h4>Описание</h4>
//                         <p>{description}</p>
//                         <p className="price">Цена: ${price.toFixed(2)}</p>
//                     </div>
//                     <div className="product-actions">
//                         <button className="add-to-cart-button" onClick={handleAddToCart}>
//                             Добавить в корзину
//                         </button>
//                         <button className="buy-now-button">Купить сейчас</button>
//                     </div>
//                     <div className="product-features">
//                         <h4>Характеристики:</h4>
//                         <ul>
//                             {features &&
//                             features.map((feature, index) => (
//                                 <li key={index}>
//                                     {feature.key}: {feature.value}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ProductDetails;







// client/src/components/ProductDetails/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ products, addToCart }) => {
    const { productId } = useParams();
    const history = useHistory();
    const product = products.find((product) => product._id === productId);

    const [mainImage, setMainImage] = useState(
        JSON.parse(localStorage.getItem(`mainImage_${productId}`)) ||
        (product && product.images && product.images.length > 0 ? product.images[0] : null)
    );

    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        localStorage.setItem(`mainImage_${productId}`, JSON.stringify(mainImage));
    }, [mainImage, productId]);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
    };

    if (!product) {
        return <div className="product-details">Product not found</div>;
    }

    const { brand, name, price, description, features, images } = product;

    return (
        <div className="product-details">
            <div className="product-header">
                <div className="product-title">
                    <h2>{name}</h2>
                    <h3>{brand}</h3>
                </div>
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
                    <div className="description-box">
                        <h4>Описание</h4>
                        <p>{description}</p>
                        <p className="price">Цена: ${price.toFixed(2)}</p>
                    </div>
                    <div className="product-actions">
                        <button
                            className={`add-to-cart-button ${addedToCart ? 'added-to-cart' : ''}`}
                            onClick={handleAddToCart}
                            disabled={addedToCart}
                        >
                            {addedToCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
                        </button>
                        <button className="buy-now-button">Купить сейчас</button>
                    </div>
                    <div className="product-features">
                        <h4>Характеристики:</h4>
                        <ul>
                            {features &&
                            features.map((feature, index) => (
                                <li key={index}>
                                    {feature.key}: {feature.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
