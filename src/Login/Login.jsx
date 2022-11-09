import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
        }).catch(err=> setError(err.message))
    }
    return (
      <div className='flex'>
        <div className='mt-20'>
            <img className='w-4/5 h-96 rounded-sm shadow-md' src="https://i0.wp.com/codemyui.com/wp-content/uploads/2016/01/owl-login-form-replica-from-readme-io_.gif?fit=880%2C440&ssl=1" alt="" />
      </div>
        <div className="hero min-h-screen bg-base-200 w-1/2">
       
        <div className="hero-content flex-col lg:flex-row-reverse ">
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
      <form onSubmit={handleSubmit} className="card-body">
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>
         <p className='text-red-600'>{ error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
       </div>
      </div>
    );
};

export default Login;