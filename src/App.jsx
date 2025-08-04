// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import HomeProduct from './Components/HomeProduct';
import Container1 from './Components/Container';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Dashboard from './Components/Dashboard';
import GamingMonitors from './Components/Gamingmonitors';
import GamingMonitorSlider from './Components/GamingmonitorSlider';
import GamingLaptop from './Components/GamingLaptop';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import ForgotPassword from './Components/Forgotpassword';
import BarsDataset from './Components/Bar';
import AddToProduct from './Components/AddToProduct';
import AddCategories from './Components/AddCategories';
import CategoryTable from './Components/pages/Categorytable';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import ReviewPage from './Components/pages/ReviewPage';
import GamingPC from './Components/GamingPC';
import GraphicCard from './Components/GraphicCard';

function AppContent() {
  const location = useLocation();
  const hideFooterOn = ["/signup","/loginuser","/forgotpassword","/dashboard","/cart"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <HomeProduct />
            <Container1 />
            <GamingMonitors/>
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginuser" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/AddProduct" element={<AddToProduct />} />
        <Route path="/AddCategories" element={<AddCategories/>} />
        <Route path="/Categorytable" element={<CategoryTable/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/GamingPC" element={<GamingPC/>} />
        <Route path="/GraphicCard" element={<GraphicCard/>} />







        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admins" element={<AdminLogin/>} />
        <Route path="/monitors" element={
          <>
            
            <GamingMonitorSlider/>
            <GamingMonitors />
          </>
        } />

        <Route path="/gaminglaptop" element={<GamingLaptop />} />
        <Route path="/productdetails" element={<ProductDetails/>} />

        


      </Routes>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
