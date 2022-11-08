import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Signup = () => {
       
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

        const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                     navigate(from, { replace: true });
                })
            .catch(err=> setError(err.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up!</h1>
      
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
                            <p className='text-red-600'>{ error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signup;