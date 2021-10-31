// import React, { useEffect, useState } from 'react';
// import './ServiceDetail.css';
// import useAuth from '../../hooks/useAuth';
// import { useParams } from 'react-router';

// const ServiceDetail = () => {
//     const { id } = useParams();
//     const { user } = useAuth();
//     const [services, setServices] = useState([]);
//     const [order, setOrder] = useState({});

//     useEffect(() => {
//         const url = `https://stormy-fjord-21313.herokuapp.com/services/${id}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])



//     // data send in manage order
//     const handleAddToManageOrder = index => {
//         const orders = services[index];
//         orders.email = user.email;

//         fetch('https://stormy-fjord-21313.herokuapp.com', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(orders)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     alert('added successfully.')
//                 }
//             })
//     }
//     return (
//         <div className='container service'>


//             <h1>id: {id}</h1>
//             <h2>{order.name}</h2>



//             <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</h2>

//             <div className='services-container'>
//                 {
//                     services.map((service, index) => (
//                         <div
//                             key={service._id}
//                             service={service}
//                             className="card"
//                             style={{ width: "18rem", height: '17rem', marginBottom: '10px' }}
//                         >

//                             <div>
//                                 <img style={{ height: '180px' }}
//                                     src={service.image} className="card-img-top" alt="..." />

//                                 <div className="card-body">
//                                     <h5 className="card-title">{service.name}</h5>
//                                     <p
//                                         onClick={() => handleAddToManageOrder(index)}
//                                         style={{ cursor: 'pointer', backgroundColor: 'gainsboro', textAlign: 'center' }}
//                                     >Add to Order</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div >
//     );
// };

// export default ServiceDetail;