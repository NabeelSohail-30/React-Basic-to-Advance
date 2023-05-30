import React from 'react';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Login />
            <Footer />
        </div>
    );
};

export default App;
