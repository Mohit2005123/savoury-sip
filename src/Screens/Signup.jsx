import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import MyNavbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });

    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://savoury-sip-backend5.onrender.com/api/createuser', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setError(''); // Clear any previous error messages
            // Optionally, redirect the user to the login page or another page
            loginUser({email: formData.email, password:formData.password});
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    };
    const loginUser = async (formData) => {
        try {
            const response = await axios.post('https://savoury-sip-backend5.onrender.com/api/loginuser', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            if(response.data.success== true){
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('userEmail', formData.email);
                console.log(localStorage.getItem('authToken'));
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            alert('Enter valid credentials');
        }
    };

    return (
        <section>
            <div><MyNavbar /></div>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        {error && <p className="error">{error}</p>}
                        <div className="inputbox">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label>Name</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="inputbox">
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            <label>Location</label>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="register">
                            <p> Already a user <Link className='link' to='/login'>Login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
