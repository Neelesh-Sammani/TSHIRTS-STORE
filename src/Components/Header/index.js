import React from "react";
import "./header.css";
import { ShoppingCart } from "@mui/icons-material";
import {Button,Badge} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Header = ({cartItems}) => {

  const navigate = useNavigate();
  const cartCount = cartItems?cartItems.length:null; 

  return (
    <div className="header">
      <div>
        <h3 style={{marginLeft:'10px'}}>Teerex store</h3>
      </div>
      <div className="icon">
        <Button onClick={() => navigate("/")} style={{marginRight:'10px', color:'black'}}>Products</Button>
        <Button  onClick={() => navigate("/Cart")} style={{ backgroundColor: "#c2c4c3", color:'black'}}><Badge badgeContent={cartCount} color='success'><ShoppingCart /></Badge></Button>
      </div>
    </div>
  );
};
export default Header;