import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut, loginWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
      console.log(err)
    })
  }

  const handleGooleLogin = () => {
    loginWithGoogle()
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
      })
      .catch(err => {
      console.log(err)
    })
  }
  

  const menuItems = <>
       <li className='font-semibold'><Link to='/'>Home</Link></li>
       <li className='font-semibold'><Link to='/addservices'>Add Services</Link></li>
       <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
       <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
       
    </>
    return (
  <div className="navbar bg-base-100 my-7">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
      </ul>
    </div>
          <Link to='/'>
              <img className='w-32 h-20 rounded' src="https://i.ibb.co/SVwKBy4/download.jpg" alt="" />
          </Link>
          <h1 className='text-green-600 ml-2 text-3xl underline decoration-wavy font-bold'>Green Tour</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
       {menuItems}
    </ul>
  </div>
        <div className="navbar-end">
          {
            user?.email ? 
              <button onClick={handleLogout} className="btn">Logout</button>
              :
              <div>
                <Link onClick={handleGooleLogin} className="btn mr-2"><img className='w-6 h-6 mr-2' src="https://i.ibb.co/Sc2XP7f/profile-vrt-raw-bytes-1587515358-10512.png" alt="" />Google Login</Link>
                <Link to='/login'  className="btn mr-2"><img className='w-6 h-6 mr-2' src="https://i.ibb.co/HdWZdph/images.jpg" alt="" />Login</Link>
                
               
              </div>
          }
  
  </div>
</div>
    );
};

export default Header;
 