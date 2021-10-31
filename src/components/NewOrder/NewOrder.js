import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const NewOrder = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const orders = data;
        orders.email = user.email;

        fetch('https://stormy-fjord-21313.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Added the Service.')
                    reset();
                }
            })
    };
    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <form className='service-form' onSubmit={handleSubmit(onSubmit)}>
                <h2 style={{ marginBottom: '20px' }}>Include Your Order</h2>
                <input type='url' {...register("image",)} placeholder='Image url' />
                <input {...register("name",)} placeholder='Service name' />
                <input type="number" placeholder='Price' />
                <textarea {...register("description",)} placeholder='Description' />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default NewOrder;