// // client/src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './components/Home';
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';
// import Profile from './components/Profile/Profile';
// import Cart from './components/Cart/Cart';
// import './App.css';
//
// function App() {
//     const [cartItems, setCartItems] = useState([]);
//
//     const addToCart = (item) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
//
//             if (existingItem) {
//                 return prevItems.map((prevItem) =>
//                     prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
//                 );
//             } else {
//                 return [...prevItems, { ...item, quantity: 1 }];
//             }
//         });
//     };
//
//     const removeFromCart = (item) => {
//         setCartItems((prevItems) => {
//             const updatedItems = prevItems.filter((prevItem) => prevItem.id !== item.id);
//             return updatedItems;
//         });
//     };
//
//     const clearCart = () => {
//         setCartItems([]);
//     };
//
//     const increaseQuantity = (item) => {
//         setCartItems((prevItems) =>
//             prevItems.map((prevItem) =>
//                 prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
//             )
//         );
//     };
//
//     const decreaseQuantity = (item) => {
//         setCartItems((prevItems) =>
//             prevItems.map((prevItem) =>
//                 prevItem.id === item.id && prevItem.quantity > 1
//                     ? { ...prevItem, quantity: prevItem.quantity - 1 }
//                     : prevItem
//             )
//         );
//     };
//
//     return (
//         <Router>
//             <Header />
//             <Switch>
//                 <Route exact path="/" render={(props) => <Home {...props} addToCart={addToCart} />} />
//                 <Route path="/register" component={Register} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/profile" component={Profile} />
//                 <Route path="/cart">
//                     <Cart
//                         cartItems={cartItems}
//                         removeFromCart={removeFromCart}
//                         clearCart={clearCart}
//                         increaseQuantity={increaseQuantity}
//                         decreaseQuantity={decreaseQuantity}
//                     />
//                 </Route>
//                 {/* TODO: Add more routes here */}
//             </Switch>
//         </Router>
//     );
// }
//
// export default App;





// client/src/App.js
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';  // Добавлено
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Загрузка данных о продуктах
        fetch('http://localhost:5500/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((prevItem) => prevItem._id === item._id);

            if (existingItem) {
                return prevItems.map((prevItem) =>
                    prevItem._id === item._id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((prevItem) => prevItem._id !== item._id);
            return updatedItems;
        });
    };


    const clearCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (item, newQuantity) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((prevItem) =>
                prevItem.id === item.id ? { ...prevItem, quantity: newQuantity } : prevItem
            );
            return updatedItems;
        });
    };


    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props} addToCart={addToCart} />} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/cart">
                    {cartItems.length === 0 ? (
                        <Redirect to="/" />
                    ) : (
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                            updateQuantity={updateQuantity}
                        />
                    )}
                </Route>
                <Route path="/product/:productId">
                    <ProductDetails  products={products}  addToCart={addToCart} />
                    {/*<ProductDetails products={products} addToCart={addToCart} />*/}
                </Route>
                {/* TODO: Add more routes here */}
            </Switch>
        </Router>
    );
}

export default App;






