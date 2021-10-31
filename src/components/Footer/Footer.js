import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{
            color: 'white',
            backgroundColor: '#3d3d47',
            padding: '30px 20px 10px 20px'
        }}>
            <div className='container footer-container'>
                <div>
                    <div>
                        <h3>Contact us</h3>
                        <p><i class="fas fa-map-marker-alt"></i> Mirpur-10, Road No:03,<br /> Dhaka</p>
                    </div>
                    <div>
                        <i class="fab fa-facebook-square  social-icon"></i>
                        <i class="fab fa-twitter-square social-icon"></i>
                        <i class="fab fa-linkedin social-icon"></i>
                        <i class="fab fa-instagram-square social-icon"></i>
                    </div>
                </div>

                <div>
                    <h2>Our Feature</h2>
                    <div style={{ lineHeight: '10px', marginTop: '20px' }}>
                        <p>24 hours active.</p>
                        <p>Experience Driver.</p>
                        <p>World tour facility.</p>
                        <p>Honesty is our main power.</p>
                    </div>
                </div>

                <div>
                    <h2 style={{ margin: '15px 0px' }}>Send Feedback</h2>
                    <input style={{ width: '300px', padding: '6px 10px' }} type="text" name="" id="" />
                    <br />
                    <button style={{
                        width: '100px', padding: '3px 0px',
                        marginTop: '5px', borderRadius: '5px'
                    }}>
                        <i class="fas fa-paper-plane"></i> Send</button>
                </div>
            </div>


            <hr style={{ width: '80%', margin: '20px auto' }} />
            <p style={{ textAlign: 'center' }}>Copyright <i class="far fa-copyright"></i> by happy journy.</p>
        </div >
    );
};

export default Footer;