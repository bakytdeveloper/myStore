// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* TODO: Add more routes here */}
            </Switch>
        </Router>
    );
}

export default App;
