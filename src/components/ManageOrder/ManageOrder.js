import React, { useEffect, useState } from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://stormy-fjord-21313.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '50px 0px 20px 0px' }}>Total orders:  {orders.length}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '68%', margin: 'auto' }}>
                {
                    orders.map(order => <div
                        key={order._id}
                        className="card"
                        style={{ width: "18rem", height: '22rem' }}>

                        <img style={{ height: '180px' }}
                            src={order.image} className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">{order.name}</h5>
                            <p>{order.price}</p>
                            <p>{order.description}</p>
                            <p style={{ color: 'red', float: 'right' }}>Delete</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;