import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../hooks/useDocs';
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

    const handleSubmit = async (e) => {
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

        try {
            await addUser1(
                formData.username,
                formData.email,
                formData.number,
                formData.city,
                formData.password
            );
            navigate('/'); // Go to login or homepage
        } catch (error) {
            setErrors('Registration failed. Try again.');
            console.error(error);
        }
    };

    return (
        <div className="pirveli">
            <div className="meore">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat Password"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </form>

                {errors && <div style={{ color: 'red' }}>{errors}</div>}
            </div>
        </div>
    );
}

export default Registration;
