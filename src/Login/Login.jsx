import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../hooks/useTitle';
const Login = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
  const navigate = useNavigate()
   useTitle('Login')

  const from = location.state?.from?.pathname || "/";
  
  
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
            .then(result => {
                const user = result.user;
            fetch('https://green-ture-server.vercel.app/jwt',{
            method:"POST",
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify({user:user.email})
          })
          .then(res=>res.json())
          .then(data=>{
            localStorage.setItem('greenJwt-token',data.token)
          })
          .catch(e=>console.error(e))
              navigate(from, { replace: true });
              setError('')
              form.reset()
          }).catch(err=> setError(err.message))
    }
    return (
     <div className='lg:flex lg:flex-row sm:grid sm:grid-cols-1'>
        <div className='mt-20'>
            <img className='w-4/5 h-96 rounded-sm' src="https://i0.wp.com/codemyui.com/wp-content/uploads/2016/01/owl-login-form-replica-from-readme-io_.gif?fit=880%2C440&ssl=1" alt="" />
      </div>
        <div className="hero min-h-screen bg-base-200 w-1/2">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
      
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
            <p><small>Have a no account?</small><Link className='btn-link font-semibold' to='/signup'>Signup</Link></p>
          </label>
               <p className='text-red-600'>{ error}</p>
        </div>
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