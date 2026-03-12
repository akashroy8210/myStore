import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import Profile from "./pages/Profile/Profile"
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          {/* <Route path="/product/:id" element={<Product/>}/> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
}

export default App;
