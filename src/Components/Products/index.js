import React from "react";
import Productscard from "../ProductsCard";
import Filters from "../Filters";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Grid } from "@mui/material";
import "./products.css";

const Products = ({ data,initialProductsData,setProductsData,isDrawerOpen, handleDrawerOpen, handleDrawerClose, isLargeScreen,handleAddToCart,noDataFound }) => {
  

// console.log(data);

  return (
    <Grid container>
      <Grid  item xs={12} md={3}>
          {isLargeScreen?(<Box bgcolor="#c2c4c3" height={550} margin={'20px'}><Filters initialProductsData={initialProductsData} setProductsData={setProductsData} /></Box>):(<SwipeableDrawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen} className='drawer'>
        <div style={{ width: '250px', padding: '20px', display:'flex', justifyContent:'space-between'}}>
          <Filters initialProductsData={initialProductsData} setProductsData={setProductsData} />
          <button onClick={handleDrawerClose} variant="contained" color="primary">
           <ChevronRightIcon />
         </button>
        </div>
      </SwipeableDrawer>)}
        </Grid>
      <Grid item xs={12} md={9} className="products">
        <Grid container spacing={2} marginY={1} paddingX={1}>
          {data.map((item) => (
            <Grid key={item.id} item xs={6} md={3}>
              <Productscard product={item} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
        {noDataFound && <p style={{display:'flex',flexDirection:'column',alignItems:'center'}}>No data found</p>}
      </Grid>
    </Grid>
  );
};

export default Products;