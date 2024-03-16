// import React,{useState} from "react";
// import './card.css';
// import {
//     Button,
//     Card,
//     CardActions,
//     CardContent,
//     CardMedia,
//     Typography,
//   } from "@mui/material";
// import { AddShoppingCartOutlined } from "@mui/icons-material";

// const Productscard = ({product}) => {

//     // const handleAddToCart =() => {
//     //     console.log('Neelesh is good boy');

//     // }

//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   console.log(cartItems);


//     return (

// <Card className="card">
// <CardMedia component="img" alt={product.name} image={product.imageURL} width={450} height={150}/>
// <CardContent>
//   <Typography>{product.name}</Typography>
//   <Typography fontWeight={700}>${product.price}</Typography>
// </CardContent>
// <CardActions className="card-actions">
//   <Button
//   className="card-button"
//   onClick={() => handleAddToCart(product)}
//   fullWidth={true}
//   variant="contained"
//   startIcon={<AddShoppingCartOutlined />}
//   style={{ backgroundColor: "#c2c4c3", color:'black'}}
// >
//   Add to Cart
// </Button>
// </CardActions>
// </Card>
//     )
// }

// export default Productscard;

// Productscard.js

import React from "react";
import "./card.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";

const Productscard = ({ product, onAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" alt={product.name} image={product.imageURL} width={450} height={150} />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography fontWeight={700}>${product.price}</Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          onClick={() => onAddToCart(product)}
          fullWidth={true}
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          style={{ backgroundColor: "#c2c4c3", color: "black" }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Productscard;
