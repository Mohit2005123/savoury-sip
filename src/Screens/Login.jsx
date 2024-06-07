import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyNavbar from '../components/Navbar';
const Signup = () => {
    let navigate= useNavigate();
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });

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
            <div><MyNavbar></MyNavbar></div>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2> Login </h2>
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
                        <button type="submit">Login</button>
                        <div className="register">
                            <p> Create a new user <Link className='link' to='/createuser'>Sign Up</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;