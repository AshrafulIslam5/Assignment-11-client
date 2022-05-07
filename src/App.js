import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header'
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Laptop from './components/Inventory/Laptop/Laptop';
import AddProduct from './components/Inventory/AddProduct';
import MyItems from './components/MyItems/MyItems';
import ManageItems from './components/ManageItems/ManageItems';
import UpdateItem from './components/ManageItems/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>} />
        <Route path='/inventory/:id' element={<RequireAuth><Laptop></Laptop></RequireAuth>} />
        <Route path='/addProduct' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>} />
        <Route path='/manageitems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>} />
        <Route path='/manageitems/:id' element={<RequireAuth><UpdateItem></UpdateItem></RequireAuth>} />
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/signin' element={<SignIn></SignIn>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer icon={false} />
    </div>
  );
}

export default App;
