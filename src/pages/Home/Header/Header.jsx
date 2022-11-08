import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(AuthContext)
  
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
      console.log(err)
    })
  }
  const menuItems = <>
       <li className='font-semibold'><Link to='/'>Home</Link></li>
       <li className='font-semibold'><Link to='/addservices'>Add Services</Link></li>
       <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
       {
      user?.email ? 
        <li className='font-semibold'><button onClick={handleLogout}>Logout</button></li>
        :
        <>
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
       <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
        </>
        }
    
     
        
       
    </>
    return (
  <div className="navbar bg-base-100 mb-7">
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
              <img className='w-32 h-20 rounded' src="data:image/jpeg;base64,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" alt="" />
          </Link>
          <h1 className='text-green-600 ml-2 text-3xl underline decoration-wavy font-bold'>Green Tour</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
       {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;
 