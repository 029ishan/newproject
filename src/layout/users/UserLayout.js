import React, { useEffect } from 'react'
import Crud from './detail/Crud';


import UserNavbar from './UserNavbar';









const  UserLayout =()  => {
 

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (!user) {
    //         navigate('/login'); 
    //     }
    // }, [navigate]);

    // const handleLogout = () => {
    //     localStorage.removeItem('user');
    //     navigate('/login');
       
    // }
  return (

<div>
{/* <button onClick={handleLogout}>
                Logout
            </button> */}
            <UserNavbar/>
  <Crud/>
 
</div>

  
  );
}

export default UserLayout;