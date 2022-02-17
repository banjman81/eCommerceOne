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
  // let cart = []
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const payload = await axios.get('https://fakestoreapi.com/products')
      setProducts(payload.data)
    }

    fetchProducts()
  }, [])

  const addToCart = (id) => {
    const addedItem = products.find(product => product.id == id)
    addedItem.count = 1
    setCart(cart => [...cart, addedItem])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ProductsContext.Provider value={{products, addToCart, cart, setCart}}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        </ProductsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
