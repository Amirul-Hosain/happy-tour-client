import React, { useEffect, useState } from 'react';
// import './ManageOrder.css'
import './MyOrders.css'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`https://stormy-fjord-21313.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this?');
        if (proceed) {
            const url = `https://stormy-fjord-21313.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully from Book List.');

                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                })
        }
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '15%', backgroundColor: 'rgb(33, 30, 56)' }}>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to='/neworder'>
                        <p className='add-new-order'>Add New Order</p>
                    </Link>
                </div>

                <div style={{ width: '60%', margin: 'auto' }}>
                    <h2 style={{ fontSize: '35px', margin: '70px 0px 30px 0px' }}>Your Previous Orders</h2>
                    <div className='old-orders'>
                        {
                            orders.map(order => <div
                                key={order._id}
                                className="card"
                                style={{ width: "18rem", height: '23rem' }}>

                                <img style={{ height: '180px' }}
                                    src={order.image} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">{order.name}</h5>
                                    <p>{order.price}</p>
                                    <p>{order.description}</p>
                                    <p
                                        onClick={() => handleOrderDelete(order._id)}
                                        className='delete-button'>
                                        Delete
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;