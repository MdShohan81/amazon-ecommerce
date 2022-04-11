import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const navigate = useNavigate();

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/orders')
    }

    const handleCreateSubmit = event =>{
        event.preventDefault();
        if(password !== ConfirmPassword){
            setError("password are not match with confirmPassword")
            return;
        }
        if(password.length <= 8){
            setError("password must be 8 characters or up")
            return;
        }
        createUserWithEmailAndPassword(email, password);
        
    }
    return (
        <div>
            <div className='container-fluid my-4'>
                <div className="row">
                    <div className="col-md-12 cols-12 w-25 mx-auto card border-dark shadow-lg">
                    <form onSubmit={handleCreateSubmit} className='mt-3'>
                    <h3 className='text-center'>SignUp</h3>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" name='email' className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="pass1" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" name='pass1' className="form-control" id="pass1" required/>
                    </div>
                    <div className="mb-3">
                        <label for="pass2" className="form-label">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name='pass2' className="form-control" id="pass2" required/>
                    </div>
                    <div>
                    <p  className='text-danger'><small>{error}</small></p>
                    <button type="submit" className="btn btn-danger w-100">Submit</button>
                    </div>
                    <div className='mt-3'>
                    <span className='ms-3'>Already have a account?</span>
                    <Link to='/login' className='text-primary bolder fs-6 nav-link'>LogIn Account</Link>
                    </div>
                    </form>
                    <div className='or-section '>
                        <div className='left'></div>
                        <span>or</span>
                        <div className='right'></div>
                    </div>
                    <button className='btn btn-outline-danger mb-5'>SignUp with google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;