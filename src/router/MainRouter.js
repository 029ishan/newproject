import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AdminLayout from '../layout/admin/AdminLayout';
import Home from '../layout/admin/pages/userlist/Home';
import Login from '../log-sign/Login';
import Signup from '../log-sign/Signup';
import App from '../App';
import About from '../layout/users/About';
import Users from '../layout/admin/pages/userlist/Users';
// import ProtectedRoute from '../component/ProtectedRoute';


export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<App />} />
      <Route exact path="/about" element={<About />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin Routes */}
      {/* <Route element={<ProtectedRoute allowedRole="Admin" />}> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
        </Route>
      

      {/* User Routes */}
      {/* <Route element={<ProtectedRoute allowedRole="User" />}> */}
        <Route path="/signupdetail" element={<Users />} />
      {/* </Route> */}
    </Route>
  )
);
