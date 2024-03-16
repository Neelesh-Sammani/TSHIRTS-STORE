import { useState } from "react";
import Header from "../Header";
import './cart.css';


const Cart = ({ cartItems,onDeleteItem }) => {

    const [itemQuantities, setItemQuantities] = useState({});

    const handleDelete = (itemId) => {
      onDeleteItem(itemId);
    };
  
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * (itemQuantities[item.id] || 1), 0);
    };

    const calculateRemainingQuantity = (item) => {
        const maxQty = item.quantity; // Assuming item.quantity represents the maximum available quantity
        const currentQty = itemQuantities[item.id] || 1;
        return maxQty - currentQty;
    };
  
    const handleIncrement = (itemId, maxQty) => {
      const currentQty = itemQuantities[itemId] || 1;
  
      if (currentQty < maxQty) {
        setItemQuantities((prevQuantities) => ({
          ...prevQuantities,
          [itemId]: currentQty + 1,
        }));
      } else {
        alert("Out of Stock");
      }
    };
  
    const handleDecrement = (itemId) => {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1),
      }));
    };

    return (
      <div>
        <Header cartItems={cartItems} />
        <h3 style={{ margin: '60px' }}>Shopping Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-container">
            <div className="cart-card">
              <img src={item.imageURL} alt={item.name} width="100px" height="100px" />
              <div style={{ margin: '5px' }}>
                <h4>{item.name}</h4>
                <p>Rs.{item.price}</p>
                <p>Remaining: {calculateRemainingQuantity(item)} items</p>
              </div>
            </div>
            <div className="cart-content">
              <button onClick={() => handleIncrement(item.id, item.quantity)}>+</button>
              <h5 style={{ margin: '10px' }}>Qty:{itemQuantities[item.id] || 1}</h5>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '30px', width: '80px', height: '40px' }}>Delete</button>
            </div>
          </div>
        ))}
        <hr style={{ margin: '40px 100px' }} />
        <div className="cart-amount">
          <h4>Total amount:</h4>
          <p>Rs.{calculateTotalAmount()}</p>
        </div>
      </div>
    );
  };
  
  export default Cart;
  