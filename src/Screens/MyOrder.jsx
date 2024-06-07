import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        try {
            const response = await axios.post("https://savoury-sip-backend5.onrender.com/api/myOrderData", {
                email: localStorage.getItem('userEmail')
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setOrderData(response.data);
        } catch (error) {
            console.error("There was an error fetching the order data!", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData && orderData.orderData ? 
                        Object.entries(orderData.orderData.orderData).map(([key, orderItem]) => (
                            <div key={key}>
                                {orderItem.orderDate && (
                                    <div className='m-auto mt-5'>
                                        {orderItem.orderDate}
                                        <hr />
                                    </div>
                                )}
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        <img src={orderItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{orderItem.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{orderItem.quantity}</span>
                                                <span className='m-1'>{orderItem.size}</span>
                                                <span className='m-1'>{orderItem.orderDate}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    ₹{orderItem.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : null}
                </div>
            </div>
            <Footer />
        </div>
    );
}
