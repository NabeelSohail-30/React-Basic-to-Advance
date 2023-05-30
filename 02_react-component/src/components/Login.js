import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
