import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './Components/CreateUser/CreateUser.js';
import ViewUser from './Components/ViewUser/ViewUser.js';
import PrivateRoutes from './Protected/PrivateRoutes.js';
import EditUser from './Components/EditUser/EditUser.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Footer from './Pages/Footer/Footer.js';
import Login from './Auth/Login.js';
import Register from './Auth/Register.js';

export const Student_BASE_URL = "https://localhost:7187/api/Student";
export const User_BASE_URL = "https://localhost:7187/api/User";

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          {/* Admin route */}
          <Route element={<PrivateRoutes />}>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='/new-user' element={<CreateUser />}></Route>
            <Route path='dashboard/edit-user/:id' element={<EditUser />}></Route>
            <Route path='/dashboard/view-user/:id' element={<ViewUser />}></Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}


