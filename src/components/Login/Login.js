import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user, loading] = useSignInWithEmailAndPassword(auth);

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    if(error){
        setError("please type write password")
    }
   if(loading){
       return (<div class="spinner-border text-primary d-flex justify-content-center" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>);
   }
   if(user){
        navigate(from, { replace: true })
   }

    const handleSignInSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className='container-fluid my-4'>
                <div className="row">
                    <div className="col-md-12 cols-12 w-25 mx-auto card">
                    <form onSubmit={handleSignInSubmit} className='mt-3'>
                    <h2 className='text-center'>Login</h2>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" name='email' className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="pass" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" name='pass' id="pass" required/>
                        <p className='text-danger'>{error}</p>
                        <p className='text-center'>{loading}</p>
                    </div>
                    
                    <button type="submit" className="btn btn-danger w-100">Submit</button>
                    <div className='mt-3'>
                    <span className='ms-3'>New to amazon-ecommerce?</span>
                    <Link to='/signup' className='text-primary bolder fs-6 nav-link'>Create Account</Link>
                    </div>
                    </form>
                    <div className='or-section '>
                        <div className='left'></div>
                        <span>or</span>
                        <div className='right'></div>
                    </div>
                    <button className='btn btn-outline-danger mb-5'>SignIn with google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;