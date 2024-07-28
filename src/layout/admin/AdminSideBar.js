import React, { useEffect } from 'react'
import './SideBar.css'
import { MdLineStyle, MdMailOutline, MdOutlineAttachMoney} from 'react-icons/md'
import { FcFeedback, FcSalesPerformance } from 'react-icons/fc'
import { IoAnalyticsSharp } from 'react-icons/io5'
import { LuLogOut, LuUser2 } from 'react-icons/lu'
import { AiFillProduct } from 'react-icons/ai'
import { VscGraph } from 'react-icons/vsc'
import { RiMessage2Line } from 'react-icons/ri'
import {  CgToolbox } from 'react-icons/cg'
import { Link, useNavigate} from 'react-router-dom'



const AdminSideBar = () => {

     const navigate = useNavigate();

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (!user) {
    //         navigate('/login'); 
    //     }
    // }, [navigate]);
 const handleLogout = () => {
        localStorage.removeItem('user');
        alert('are you sure?')
        navigate('/login');
       
    }

    
    
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                   <Link to={'/admin'}>
                   <MdLineStyle className='sideBarIcons'/>
                Home
                   </Link>
                </li>
                <li className="sidebarListItem">
                <IoAnalyticsSharp  className='sideBarIcons'/>Analytics
                </li>
                <li className="sidebarListItem">
                <FcSalesPerformance  className='sideBarIcons'/>Sales
                </li>
            </ul>
            
        </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quice Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <Link to="/signupdetail">
                <LuUser2  className='sideBarIcons'/>
                 Users
                 </Link> 
                </li>
                <li className="sidebarListItem">
                <AiFillProduct  className='sideBarIcons'/>Products
                </li>
                <li className="sidebarListItem">
                <MdOutlineAttachMoney className='sideBarIcons'/>Transactions
                </li>
                <li className="sidebarListItem">
                <VscGraph  className='sideBarIcons'/>Reports
                </li>
            </ul>
           
        </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <MdMailOutline className='sideBarIcons'/>Mail
                </li>
                <li className="sidebarListItem">
                <FcFeedback  className='sideBarIcons'/>Feedback
                </li>
                <li className="sidebarListItem">
                <RiMessage2Line  className='sideBarIcons'/>Message
                </li>
            </ul>
           
        </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                <CgToolbox className='sideBarIcons'/>Manage
                </li>
                <li className="sidebarListItem">
                <IoAnalyticsSharp  className='sideBarIcons'/>Analytics
                </li>
                <li className="sidebarListItem" onClick={handleLogout}>
                <LuLogOut   className='sideBarIcons' />LogOut
                </li>
               
                
            </ul>
           
        </div>
        </div>
    </div>
  )
}

export default AdminSideBar
