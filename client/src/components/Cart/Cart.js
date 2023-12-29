// // client/src/components/Cart/Cart.js
// import React from 'react';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }) => {
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };
//
//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     <div className="cart-items">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="cart-item">
//                                 <img src={item.image} alt={item.name} />
//                                 <div>
//                                     <h3>{item.name}</h3>
//                                     <p>Price: ${item.price.toFixed(2)}</p>
//                                     <div className="quantity-buttons">
//                                         <button onClick={() => decreaseQuantity(item)}>-</button>
//                                         <p>{item.quantity}</p>
//                                         <button onClick={() => increaseQuantity(item)}>+</button>
//                                     </div>
//                                     <button onClick={() => removeFromCart(item)}>Remove</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-total">
//                         <p>Total: ${calculateTotal()}</p>
//                         <button onClick={clearCart}>Clear Cart</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Cart;





// // client/src/components/Cart/Cart.js
// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
//     const history = useHistory();
//
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };
//
//     const handleCheckout = () => {
//         // TODO: Implement checkout logic (redirect, order processing, etc.)
//         // For now, just redirect to the home page after clearing the cart
//         clearCart();
//         history.push('/');
//     };
//
//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <div>
//                     <p>Your cart is empty.</p>
//                     <p>
//                         <Link to="/">Browse products</Link>
//                     </p>
//                 </div>
//             ) : (
//                 <>
//                     <div className="cart-items">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="cart-item">
//                                 <img src={item.image} alt={item.name} />
//                                 <div>
//                                     <h3>{item.name}</h3>
//                                     <p>Price: ${item.price.toFixed(2)}</p>
//                                     <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
//                                     <input
//                                         type="number"
//                                         id={`quantity-${item.id}`}
//                                         value={item.quantity}
//                                         onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
//                                         min="1"
//                                     />
//                                     <button onClick={() => removeFromCart(item)}>Remove</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-total">
//                         <p>Total: ${calculateTotal()}</p>
//                         <button onClick={clearCart}>Clear Cart</button>
//                         <button onClick={handleCheckout}>Checkout</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Cart;





// // client/src/components/Cart/Cart.js
// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
//     const history = useHistory();
//
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };
//
//     const handleCheckout = () => {
//         // TODO: Implement checkout logic (redirect, order processing, etc.)
//         // For now, just redirect to the home page after clearing the cart
//         clearCart();
//         history.push('/');
//     };
//
//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <div>
//                     <p>Ваша корзина пуста.</p>
//                     <p>
//                         <Link to="/">Просмотрите продукты.</Link>
//                     </p>
//                 </div>
//             ) : (
//                 <>
//                     <div className="cart-items">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="cart-item">
//                                 {/* Use item.images[0].url to display the first image */}
//                                 <img src={item.images[0].url} alt={item.name} />
//                                 <div>
//                                     <h3>{item.name}</h3>
//                                     <p>Цена: ${item.price.toFixed(2)}</p>
//                                     <label htmlFor={`quantity-${item.id}`}>Количество:</label>
//                                     <input
//                                         type="number"
//                                         id={`quantity-${item.id}`}
//                                         value={item.quantity}
//                                         onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
//                                         min="1"
//                                     />
//                                     <button onClick={() => removeFromCart(item)}>Удалить</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-total">
//                         <p>Total: ${calculateTotal()}</p>
//                         <button onClick={clearCart}>Очистить корзину</button>
//                         <button onClick={handleCheckout}>Проверить</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Cart;





// // client/src/components/Cart/Cart.js
// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
//     const history = useHistory();
//
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };
//
//     const handleCheckout = () => {
//         // TODO: Implement checkout logic (redirect, order processing, etc.)
//         // For now, just redirect to the home page after clearing the cart
//         clearCart();
//         history.push('/');
//     };
//
//     const addToCart = (product) => {
//         const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
//
//         if (existingItemIndex !== -1) {
//             const updatedCartItems = [...cartItems];
//             updatedCartItems[existingItemIndex] = { ...updatedCartItems[existingItemIndex], quantity: updatedCartItems[existingItemIndex].quantity + 1 };
//             updateQuantity(updatedCartItems[existingItemIndex], updatedCartItems[existingItemIndex].quantity);
//         } else {
//             updateQuantity({ ...product, quantity: 1 }, 1);
//         }
//     };
//
//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <div>
//                     <p>Ваша корзина пуста.</p>
//                     <p>
//                         <Link to="/">Просмотрите продукты.</Link>
//                     </p>
//                 </div>
//             ) : (
//                 <>
//                     <div className="cart-items">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="cart-item">
//                                 {/* Use item.images[0].url to display the first image */}
//                                 <img src={item.images[0].url} alt={item.name} />
//                                 <div>
//                                     <h3>{item.name}</h3>
//                                     <p>Цена: ${item.price.toFixed(2)}</p>
//                                     <label htmlFor={`quantity-${item.id}`}>Количество:</label>
//                                     <input
//                                         type="number"
//                                         id={`quantity-${item.id}`}
//                                         value={item.quantity}
//                                         onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
//                                         min="1"
//                                     />
//                                     <button onClick={() => removeFromCart(item)}>Удалить</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-total">
//                         <p>Total: ${calculateTotal()}</p>
//                         <button onClick={clearCart}>Очистить корзину</button>
//                         <button onClick={handleCheckout}>Проверить</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default Cart;





// // client/src/components/Cart/Cart.js
// import React from 'react';
// import './Cart.css';
//
// const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
//     return (
//         <div className="cart-container">
//             <h2>Корзина</h2>
//             {cartItems.map((item) => (
//                 <div key={item._id} className="cart-item">
//                     <div>
//                         <img src={item.images[0].url} alt={`${item.brand} ${item.name}`} />
//                     </div>
//                     <div>
//                         <p>{item.brand}</p>
//                         <p>{item.name}</p>
//                         <p>Цена: ${item.price.toFixed(2)}</p>
//                     </div>
//                     <div>
//                         <input
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
//                         />
//                     </div>
//                     <div>
//                         <button onClick={() => removeFromCart(item)}>Убрать</button>
//                     </div>
//                 </div>
//             ))}
//             <div className="cart-summary">
//                 <button onClick={clearCart}>Очистить корзину</button>
//                 <p>Общая стоимость: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
//             </div>
//         </div>
//     );
// };
//
// export default Cart;





// client/src/components/Cart/Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css';

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
        setCart((prevCart) => ({
            ...prevCart,
            [item._id]: { ...prevCart[item._id], quantity: newQuantity },
        }));
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
                        />
                    </div>
                    <div>
                        <button onClick={() => removeFromCart(cartItem.item)}>Убрать</button>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <button onClick={clearCart}>Очистить корзину</button>
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









