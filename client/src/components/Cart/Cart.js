




// // client/src/components/Cart/Cart.js
// import React, { useState, useEffect } from 'react';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
//     const [cart, setCart] = useState({});
//
//     useEffect(() => {
//         const cartObject = {};
//         cartItems.forEach((item) => {
//             cartObject[item._id] = { item, quantity: item.quantity };
//         });
//         setCart(cartObject);
//     }, [cartItems]);
//
//     const handleUpdateQuantity = (item, newQuantity) => {
//         setCart((prevCart) => ({
//             ...prevCart,
//             [item._id]: { ...prevCart[item._id], quantity: newQuantity },
//         }));
//     };
//
//     return (
//         <div className="cart-container">
//             <h2>Корзина</h2>
//             {Object.values(cart).map((cartItem) => (
//                 <div key={cartItem.item._id} className="cart-item">
//                     <div>
//                         <img src={cartItem.item.images[0].url} alt={`${cartItem.item.brand} ${cartItem.item.name}`} />
//                     </div>
//                     <div>
//                         <p>{cartItem.item.brand}</p>
//                         <p>{cartItem.item.name}</p>
//                         <p>Цена: ${cartItem.item.price.toFixed(2)}</p>
//                     </div>
//                     <div>
//                         <input
//                             type="number"
//                             value={cartItem.quantity}
//                             onChange={(e) => handleUpdateQuantity(cartItem.item, parseInt(e.target.value))}
//                         />
//                     </div>
//                     <div>
//                         <button onClick={() => removeFromCart(cartItem.item)}>Убрать</button>
//                     </div>
//                 </div>
//             ))}
//             <div className="cart-summary">
//                 <button onClick={clearCart}>Очистить корзину</button>
//                 <p>
//                     Общая стоимость: ${Object.values(cart).reduce(
//                     (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
//                     0
//                 ).toFixed(2)}
//                 </p>
//             </div>
//         </div>
//     );
// };
//
// export default Cart;






// client/src/components/Cart/Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css';
import {Link} from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const cartObject = {};
        cartItems.forEach((item) => {
            cartObject[item._id] = { item, quantity: item.quantity };
        });
        setCart(cartObject);
    }, [cartItems]);

    const handleUpdateQuantity = (item, newQuantity) => {
        if (newQuantity < 1) {
            newQuantity = 1;
        }
        setCart((prevCart) => ({
            ...prevCart,
            [item._id]: { ...prevCart[item._id], quantity: newQuantity },
        }));
    };

    const handleRemoveFromCart = (itemId) => {
        const updatedCart = { ...cart };
        delete updatedCart[itemId];
        setCart(updatedCart);
        removeFromCart(cart[itemId].item);
    };


    return (
        <div className="cart-container">
            <h2>Корзина</h2>
            {Object.values(cart).map((cartItem) => (
                <div key={cartItem.item._id} className="cart-item">
                    <div>
                        <img src={cartItem.item.images[0].url} alt={`${cartItem.item.brand} ${cartItem.item.name}`} />
                    </div>
                    <div>
                        <p>{cartItem.item.brand}</p>
                        <p>{cartItem.item.name}</p>
                        <p>Цена: ${cartItem.item.price.toFixed(2)}</p>
                    </div>
                    <div>
                        <input
                            type="number"
                            value={cartItem.quantity}
                            onChange={(e) => handleUpdateQuantity(cartItem.item, parseInt(e.target.value))}
                            min="1" // Устанавливаем минимальное значение
                        />
                    </div>
                    <div>
                        <button type="button" onClick={() => handleRemoveFromCart(cartItem.item._id)}>Убрать</button>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <button onClick={clearCart}>Очистить корзину</button>
                <Link to="/">
                    <button>Continue Shopping</button>
                </Link>
                <p>
                    Общая стоимость: ${Object.values(cart).reduce(
                    (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
                    0
                ).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default Cart;













