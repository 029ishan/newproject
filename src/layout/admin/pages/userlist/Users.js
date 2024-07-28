import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import AdminNavBar from '../../AdminNavBar'
// import AdminNavBar from '../../AdminNavBar'
// import AdminSideBar from '../../AdminSideBar'

//  import '././SideBar.css'

const Users = () => {

  const[data,setData]= useState([])
  useEffect(()=>{
    axios.get(`https://localhost:7115/api/Signupdata`)
    .then(res =>setData(res.data))
    .catch(err =>console.log(err))
  })

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7115/api/Signupdata/${id}`); // API endpoint to delete user
      setData(data.filter(user => user.id !== id)); // Update state to remove deleted user
      console.log('User deleted successfully');
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };
  return (
    <Fragment>
 <AdminNavBar/>
 {/* <AdminSideBar/>  */}

      <table class="table">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      
    </tr>
  </thead>
  <tbody>
    {
      data.map ((user, index)=>{
          return <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
           
           <td>
            <button onClick={()=>handleDelete(user.id)} className="btn btn-danger">
              Delete
            </button>
           </td>

          </tr>
      })
    }
  </tbody>
</table>
    
    </Fragment>
  )
}

export default Users
