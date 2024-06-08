import React from 'react';
import './AboutOwner.css';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
const AboutOwner = () => {
    return (
       <>
       <div><MyNavbar /></div>
            <div className="customer-service-container">
                <h1>Customer Service</h1>
                
                <div className="contact-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                    <p>Email: support@savorysip.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Cafe Street, Coffee City, CO 12345</p>
                </div>
                
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>What are your opening hours?</h3>
                        <p>We are open from 8 AM to 10 PM from Monday to Sunday.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you offer delivery services?</h3>
                        <p>Yes, we offer delivery services through our website and partnered delivery apps.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can I make a reservation?</h3>
                        <p>Yes, you can make a reservation through our website or by calling us.</p>
                    </div>
                    {/* Add more FAQs as needed */}
                </div>

                <div className="support-resources-section">
                    <h2>Support Resources</h2>
                    <p>Check out our support resources to get help with your queries.</p>
                    <ul>
                        <li><a href="/menu">View Menu</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/contact">Contact Form</a></li>
                    </ul>
                </div>
            </div>
           <Footer></Footer>
       </>
       
    );
};

export default AboutOwner;
