import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://stormy-fjord-21313.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
                <h2 style={{ marginBottom: '20px' }}>Add a New Service</h2>
                <input type='url' {...register("image",)} placeholder='Image url' />
                <input {...register("name",)} placeholder='Service name' />
                <input type="number" placeholder='Price' />
                <textarea {...register("description",)} placeholder='Description' />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;