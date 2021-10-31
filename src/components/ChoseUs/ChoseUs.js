import React from 'react';
import './ChoseUs.css';
import one from '../../../src/images/dedicated.png'
import two from '../../../src/images/tour.cms'
import three from '../../../src/images/low-price.jpg'

const ChoseUs = () => {
    return (
        <div>
            <div className='container facility-box'>
                <div className='facility-info'>
                    <h2>Why Choose Us?</h2>
                    <p>Here are some reasons to trust us. And are this reasons people trust us.</p>
                </div>

                <div className='facility-details' >
                    <div className='facility'>
                        <img src={two} alt="" />
                        <h4>Handpicked Tour</h4>
                        <p>Your tour idea is in your hand now. You can anytime book our ticket and happily tour.</p>
                    </div>
                    <div className='facility'>
                        <img src={one} alt="" />
                        <h4>Dedicated Support</h4>
                        <p>We are always concern your any support.So you can get help to us always. </p>
                    </div>
                    <div className='facility'>
                        <img src={three} alt="" />
                        <h4>Lowest Price</h4>
                        <p>We provide good service on a small budget. So there is nothing to worry about the budget.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChoseUs;