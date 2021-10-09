import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/shop'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(reslt => {
            history.push(redirect_url)
        })
    }

    return (
        <div className = 'login-from'>
            <div>
                <h1>Login</h1>
                <form onSumbmit="">
                    <input type="email" placeholder = 'Your Email' />
                    <br />
                    <input type="password" placeholder = 'Password' />
                    <br />
                    <input type="submit" value = 'submit' />    
                </form>
                <p>new to ema-john? <Link to='register'>Create Account</Link></p>
                <div>---------or----------</div>
                <button className = 'btn-regular' onClick = {handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};


export default Login;