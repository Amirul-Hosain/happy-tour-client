import React, { useEffect, useState } from 'react';
import './Services.css';
import useAuth from '../../hooks/useAuth';
// import { Link } from 'react-router-dom';

const Services = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://stormy-fjord-21313.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    // data send in manage order
    const handleAddToManageOrder = index => {
        const orders = services[index];
        orders.email = user.email;

        fetch('https://stormy-fjord-21313.herokuapp.com', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully.')
                }
            })
    }
    return (
        <div className='container service'>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</h2>

            <div className='services-container'>
                {
                    services.map((service, index) => (
                        <div
                            key={service._id}
                            service={service}
                            className="card"
                            style={{ width: "18rem", height: '17rem', marginBottom: '10px' }}
                        >

                            <div>
                                <img style={{ height: '180px' }}
                                    src={service.image} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p
                                        onClick={() => handleAddToManageOrder(index)}
                                        style={{ cursor: 'pointer', backgroundColor: 'gainsboro', textAlign: 'center' }}
                                    >Add to Order</p>

                                    {/* <Link to={`/servicedetail/${service._id}`}>show detail</Link> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Services;