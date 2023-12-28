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





// client/src/components/Cart/Cart.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
    const history = useHistory();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        // TODO: Implement checkout logic (redirect, order processing, etc.)
        // For now, just redirect to the home page after clearing the cart
        clearCart();
        history.push('/');
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <p>
                        <Link to="/">Browse products</Link>
                    </p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                                    <input
                                        type="number"
                                        id={`quantity-${item.id}`}
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                                        min="1"
                                    />
                                    <button onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Total: ${calculateTotal()}</p>
                        <button onClick={clearCart}>Clear Cart</button>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;






