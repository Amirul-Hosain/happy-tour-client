import React, { useState } from 'react';
import './Login.css'
import googleLogo from '../../images/logo/google-G.png'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { handleGoogleLogin } = useAuth();
    const [user, setUser] = useState({});

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/manageorder';


    const googleLogin = () => {
        handleGoogleLogin()
            .then((result) => {
                setUser(user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch((error) => {
            })
    }
    return (
        <div style={{ backgroundColor: 'whitesmoke', padding: '20px 0px 150px 0px' }}>
            <div className='google-container'>
                <h2>Login</h2>
                <div onClick={googleLogin} className='google-login'>
                    <img width='30' height='28' src={googleLogo} alt="" />
                    <p style={{ marginLeft: '100px', fontSize: '18px' }}>Countineu with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;