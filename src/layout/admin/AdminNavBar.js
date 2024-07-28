import React from 'react'
import './NavBar.css'
import { IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const AdminNavBar = () => {
const navigate = useNavigate()

const handleprofile =()=>{
  navigate('/admin')
}

  return (
    <div className='navbar'>
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo" onClick={handleprofile}>aDminDashBoarD</span>
        </div>
        <div className="topRight">
          <div className="navbarIcon">
          <IoMdNotificationsOutline />

          </div>
          <div className="navbarIcon">
          <IoMdSettings />

          </div>
          <div className="navbarIcon">
          <CgProfile />

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavBar
