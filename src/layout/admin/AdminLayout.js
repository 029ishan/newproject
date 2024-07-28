import React, { useEffect } from 'react'
import Navbar from './AdminNavBar'
import '../../App.css'
import AdminSideBar from './AdminSideBar'
import { Outlet, useNavigate } from 'react-router-dom'


const AdminLayout = () => {

  // const navigate = useNavigate();

  //   useEffect(() => {
  //       const user = localStorage.getItem('user');
  //       if (!user) {
  //           navigate('/login'); 
  //       }
  //   }, [navigate]);

  //   const handleLogout = () => {
  //       localStorage.removeItem('user');
  //       navigate('/login');
       
  //   }
  return (
    <div>
      <Navbar/>
      <div className="container">
<AdminSideBar/>
<div className='main-container'>

<Outlet/>
</div>
      </div>
    </div>
  )
}

export default AdminLayout
