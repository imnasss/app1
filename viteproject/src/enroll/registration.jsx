import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.css';

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        city: '',
        password: '',
        repeatPassword: ''
    });

    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors('');

        if (
            formData.username === '' || 
            formData.email === '' || 
            formData.number === '' || 
            formData.city === '' || 
            formData.password === '' || 
            formData.repeatPassword === ''
        ) {
            setErrors('All fields are required');
            return;
        }

        if (formData.password !== formData.repeatPassword) {
            setErrors('Passwords do not match');
            return;
        }

        if (formData.number.length < 9) {
            setErrors('Phone number must be at least 9 digits');
            return;
        }

        if (formData.email.length < 15 || !formData.email.includes('@')) {
            setErrors('Email must be at least 15 characters and contain "@"');
            return;
        }

        // Password must have at least one uppercase, one lowercase, one number, and one of ',' or '.'
        if (
            !/[A-Z]/.test(formData.password) ||
            !/[a-z]/.test(formData.password) ||
            !/[0-9]/.test(formData.password) ||
            !/[.,]/.test(formData.password)
        ) {
            setErrors('Password must contain at least one uppercase letter, one lowercase letter, one number, and one of "," or "."');
            return;
        }

        // ✅ Registration successful
        navigate('/');  // Redirect to login page
    };

    return (
        <div className="pirveli">
            <div className="meore">
                <h2>მოგინდაა შე კვერნა</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="მამის სახელი"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City Name"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat Password"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">მიმიშვი</button>
                </form>

                {errors && <div style={{ color: 'red' }}>{errors}</div>}
            </div>
        </div>
    );
}

export default Registration;
