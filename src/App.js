import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

import { ProductsContext} from './components/contexts/ProductsContext';
// import { ContactPageOutlined } from '@mui/icons-material';

function App() {
  const [products, setProducts] = useState()
  // const cart = []

  useEffect(() => {
    const fetchProducts = async () => {
      const payload = await axios.get('https://fakestoreapi.com/products')
      setProducts(payload.data)
    }

    fetchProducts()
  }, [])

  // const addToCart = (id) => {
  //   const addedItem = products.find(product => product.id == id)
  //   addedItem.count = 1
  //   setCart(cart => [...cart, addedItem])
  // }

  function reducer(cart, action){
    switch(action.type){
      case 'addToCart':
        const foundItem = cart.findIndex(found => found.id === action.payload)
          if(foundItem != -1){
            console.log(cart[foundItem].quantity)
            cart[foundItem].quantity = cart[foundItem].quantity + 1
          }else{
            const addedItem = products.find(product => product.id === action.payload)
            addedItem.quantity = 1
            cart = [...cart, addedItem]
          }
          return cart

      case 'removeFromCart':
        return cart.filter(item => item.id !== action.payload)

      case 'emptyCart':
        return []
        
      default:
        return cart
    }
  }

  const mything = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }]
  
  const [cart, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
      <BrowserRouter>
        <ProductsContext.Provider value={{products, cart, dispatch}}>
        <Navbar />
        {/* <h2>{state.length} x</h2> */}
        {/* <button onClick={() => dispatch({type : 'emptyCart'})}>www</button> */}
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
