// // client/src/components/ProductDetails/ProductDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';
//
// const ProductDetails = ({ products, addToCart }) => {
//     const { productId } = useParams();
//     const product = products.find((item) => item.id === parseInt(productId));
//
//     if (!product) {
//         return <p>Product not found.</p>;
//     }
//
//     return (
//         <div className="product-details-container">
//             <img src={product.image} alt={product.name} />
//             <div>
//                 <h2>{product.name} {product.name} </h2>
//                 <p>{product.description}</p>
//                 <p>Price: ${product.price.toFixed(2)}</p>
//                 <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//         </div>
//     );
// };
//
// export default ProductDetails;



// // client/src/components/ProductDetails/ProductDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
//
// const ProductDetails = ({ products }) => {
//     const { productId } = useParams();
//     const product = products.find((product) => product._id === productId);
//
//     if (!product) {
//         return <div>Product not found</div>;
//     }
//
//     const { brand, name, price, description, images } = product;
//     console.log(images)
//
//     return (
//         <div>
//             <h2>{brand}</h2>
//             <h3>{name}</h3>
//             <p>Price: ${price.toFixed(2)}</p>
//             <p>Description: {description}</p>
//             <div>
//                 {images && images.length > 0 && (
//                     <div>
//                         <p>Images:</p>
//                         <div>
//                             {images.map((image, index) => (
//                                 <img key={index} src={image} alt={`Product ${index}`} />
//                                 ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default ProductDetails;




// client/src/components/ProductDetails/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find((product) => product._id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { brand, name, price, description, images } = product;

    return (
        <div>
            <h2>{brand}</h2>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Description: {description}</p>
            <div>
                {images && images.length > 0 && (
                    <div>
                        <p>Images:</p>
                        <div>
                            {images.map((image, index) => (
                                <img key={index} src={typeof image === 'string' ? image : image.url} alt={`Product ${index}`} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;

