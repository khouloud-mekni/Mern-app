import './App.css';
import {Routes, Route} from 'react-router-dom'
import PublicLayout from './components/Layout/PublicLayout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import VerifyEmail from './components/Verify/VerifyEmail';
import Book from './components/Book/Book';
import PrivateRoute from './components/Routes/PrivateRoute';
import AuthRoute from './components/Routes/AuthRoute';
import LoginAdmin from './components/Admin/LoginAdmin';
import AdminDashbord from './components/Admin/AdminDashbord';
import AdminLayout from './components/Layout/AdminLayout';
function App() {
  return (
    <Routes>
    <Route path='/' element={<PublicLayout/>}>
        <Route index element={<Home/>}/>
        <Route  path='login' element={ 
            <AuthRoute>
             <Login />
            </AuthRoute>}/>

        <Route  path='register' element={
          <AuthRoute>
            <Register />
          </AuthRoute>}/>

        
        <Route  path='book/:id' element={
          <PrivateRoute>
            <Book/>
          </PrivateRoute>
          }/>

    </Route>
    <Route path="/verify-email" element={<VerifyEmail/>} />
    {/* Admin Routes */}
    <Route path='/admin/' element={<AdminLayout/>}>
    <Route  path='dashbord' element={<AdminDashbord/>}/>
    </Route>
    <Route  path='/admin/login' element={<LoginAdmin/>}/>
    
    </Routes>
  );
}

export default App;
