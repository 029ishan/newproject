import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'

import { Link, useNavigate } from 'react-router-dom'

const UserNavbar = () => {

   const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/'); 
        }
    }, [navigate]);

    const handleLogout = () => {
      if (window.confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        navigate('/login');
      }
    };


 
  

  return (
    <div>
      
     <nav class="navbar navbar-expand-lg bg-primary ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Ishan</Link>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-5 ">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item mx-5">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li> */}
        <li class="nav-item mx-5">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
         <li class="nav-item mx-5" >
          <Link class="nav-link active" aria-current="page" to="/login" onClick={handleLogout}><CgProfile  />Logout</Link>
        </li> 
        
        {/* */}
       
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default UserNavbar
