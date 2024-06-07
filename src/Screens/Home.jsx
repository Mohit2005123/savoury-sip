import React, { useEffect, useState } from 'react';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyCard from '../components/MyCard';
import axios from 'axios';

function Home() {
    const styles = { height: '600px', objectFit: 'fill' };
    const [search, setSearch] = useState('');
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let res = await axios.get('https://savoury-sip-backend5.onrender.com/api/foodData');
        setFoodItem(res.data[0]);
        setFoodCategory(res.data[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div>
                <MyNavbar />
            </div>
            <div>
                <style>
                    {`
                      .carousel-control-prev,
                      .carousel-control-next {
                        top: 50%;
                        transform: translateY(-50%);
                      }
                    `}
                </style>
                <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                >
                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{ zIndex: '1000' }}>
                            <div className="d-flex justify-content-center">
                                <input
                                    className="form-control me-2 flex-grow-1"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{ flexBasis: '75%' }}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button className="btn btn-warning" type="submit" style={{ flexBasis: '15%' }}>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="d-block w-100"
                                alt="..."
                                style={styles}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.vox-cdn.com/thumbor/X7ZCi8NAJKvG8zqJ7VRe6Wym1UM=/0x0:2000x1333/920x0/filters:focal(0x0:2000x1333):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24413549/2023_01_06_Toadstool_Cafe_039.jpg"
                                className="d-block w-100"
                                alt="..."
                                style={styles}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.vox-cdn.com/thumbor/5QgOWfkf48x_ho_Ipggp5T4-Jl0=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24413558/2023_01_06_Toadstool_Cafe_067.jpg"
                                className="d-block w-100"
                                alt="..."
                                style={styles}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {foodCategory.length > 0 ? foodCategory.map((data) => (
                    <div key={data._id} className="mb-3">
                        <div className="fs-3 m-3">{data.CategoryName}</div>
                        <hr />
                        <div className="row">
                            {foodItem.length > 0 ? foodItem
                                .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                                .map((filteredItem) => (
                                    <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3 mb-3">
                                        <MyCard
                                        foodItems= {filteredItem}
                                            options={filteredItem.options[0]}
                                        />
                                    </div>
                                )) : <div>No such data found</div>}
                        </div>
                    </div>
                )) : ""}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
