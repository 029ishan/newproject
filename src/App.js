
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from './layout/users/UserLayout'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <UserLayout/> 
      <Outlet/>
    </div>
  );
}

export default App;
