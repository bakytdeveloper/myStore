// client/src/components/Cart/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
    const calculateTotal = () => {
        // TODO: Implement logic to calculate the total price of items in the cart
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Total: ${calculateTotal()}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
