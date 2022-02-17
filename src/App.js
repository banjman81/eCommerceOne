import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

import { ProductsContext, CartContext } from './components/contexts/ProductsContext';

function App() {
  const [products, setProducts] = useState()
  const [cart, setCart] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      const payload = await axios.get('https://fakestoreapi.com/products')
      console.log(payload.data)
    }

    fetchProducts()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
