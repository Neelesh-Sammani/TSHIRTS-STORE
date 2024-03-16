import React,{useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import TeerexStore from "./Components/TeerexStore";
import { enqueueSnackbar } from "notistack";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if(existingItemIndex !== -1){
      enqueueSnackbar('already added in cart',{variant:'warning'});
    }
    else{
      setCartItems((prevItems) => {
        const newCartItems = [...prevItems, product];
        // console.log("Cart Items:", newCartItems);
        return newCartItems;
      });
    }
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };


  return (
  <div className="App">
    <Router>
    <Routes>
          <Route exact path="/"  element={<TeerexStore onAddToCart={handleAddToCart} cartItems={cartItems} />}/>
          <Route exact path="/Cart"  element={<Cart cartItems={cartItems} onDeleteItem={handleDeleteItem} />} />
    </Routes>
    </Router>
  </div>);
}

export default App;
