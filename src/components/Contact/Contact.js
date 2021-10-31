import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className=' d-flex' style={{ marginLeft: '200px', padding: '50px 0px' }}>
                <div>
                    <div className='contact-title'>
                        <h2>Chat With Us</h2>
                        <p>Drop a message and we will get back to you soon!</p>
                    </div>
                    <form >
                        <div className='d-flex name-email  '>
                            <div className="mb-3 me-2 ">
                                <label htmlhtmlFor="name" className="form-label"></label>
                                <input type="text" name='name' placeholder="Name" aria-label="Username" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="email" className="form-label"></label>
                                <input type="text" name='email' placeholder="Email" aria-label="Username" />
                            </div>
                        </div>

                        <div className=" mb-3 w-50 get-service ">
                            <input className='  col-lg-4 ' type="text" placeholder='Which Service Do you Need...' id="exampleInputPassword1" />
                        </div>
                        <div className="input-group col-lg-4 col-sm-6 col-12">
                            <textarea className=" message" placeholder='Write your description...' aria-label="With textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Send <i class="far fa-paper-plane"></i></button>
                    </form>
                </div>

                <div className="address ">
                    <h2>Contact us</h2>
                    <p><i class="fas fa-map-marker-alt"></i> Kochukhet 21, Mirpur-10,  Dhaka, Bangladesh</p>
                    <p><i class="fas fa-phone"></i> Phone: 0123456789</p>
                    <p><i class="fas fa-envelope"></i> medicine@store.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;