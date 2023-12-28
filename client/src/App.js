// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';  // Добавлено
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    // Функция для добавления товара в корзину
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);

            if (existingItem) {
                return prevItems.map((prevItem) =>
                    prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/cart">
                    <Cart cartItems={cartItems} />
                </Route>
                {/* TODO: Add more routes here */}
            </Switch>
        </Router>
    );
}

export default App;
