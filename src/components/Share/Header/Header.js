import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import headerLogo from '../../../images/logo/header-logo.png'

const Header = () => {
    const { user, handleGoogleLogout } = useAuth();
    return (
        <div className='header-container'>
            <nav className="container navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div style={{ display: 'flex' }}>
                        <img width='60' height='75' src={headerLogo} alt="" />
                        <p style={{ width: '120px', fontSize: '20px', lineHeight: '22px', fontWeight: 'bold', paddingTop: '6px', letterSpacing: '8px' }}>Happy <span style={{ color: 'orange' }}>Journy</span></p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-links collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className='link' to='/home'>Home</Link>
                            <Link className='link' to='/addservice'>Add Service</Link>
                            <Link className='link' to='/myorders'>My Orders</Link>
                            <Link className='link' to='/manageorder'>Mange All Orders</Link>
                            <Link className='link' to='/about'>About us</Link>
                        </ul>

                        {user.email && < img className='login-image' src={user.photoURL} alt="" />}
                        {user.email && <p style={{ fontSize: '20px', marginTop: '10px' }}>{user.displayName}</p>}
                        <div>
                            {user.email ? <Link className='login-logout' onClick={handleGoogleLogout} to='/login'>Log out</Link>
                                :
                                <Link className='login-logout' to='/login'>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;