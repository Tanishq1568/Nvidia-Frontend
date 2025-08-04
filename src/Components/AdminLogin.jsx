// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const fixedEmail = 'tanishqgarg57@gmail.com';
    const fixedPassword = '123';

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === fixedEmail && password === fixedPassword) {
            localStorage.setItem('isAdmin', 'true');
            navigate('/dashboard');
            alert('Login Success');
        } else {
            alert('Invalid email or password');
            // Reset form inputs
            setEmail('');
            setPassword('');
        }
    };


    return (
        <div className="signin-bg d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn w-100" style={{ backgroundColor: "#76b900", border: "#76b900", fontWeight: "bolder" }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
