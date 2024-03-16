import { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header';
import SearchBar from '../SearchBar';
import Products from '../Products';
import {useMediaQuery} from '@mui/material';


function TeerexStore({onAddToCart,cartItems}) {

  const [productsData,setProductsData] = useState([]);
  const [initialProductsData, setInitialProductsData] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:900px)");

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const getData = async() => {
    try {
      const response = await axios.get(`http://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`);
      setProductsData(response.data);
      setInitialProductsData(response.data);
      return response.data;
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getData();
  },[]);


  return (
    // <Router>
    <>
      <Header cartItems={cartItems} />

      <SearchBar 
      handleDrawerOpen={handleDrawerOpen}
      isLargeScreen={isLargeScreen} 
      initialProductsData={initialProductsData} 
      setProductsData={setProductsData} 
      setNoDataFound={setNoDataFound} />

      <Products 
      data={productsData} 
      initialProductsData={initialProductsData} 
      setProductsData={setProductsData} 
      isDrawerOpen={isDrawerOpen} 
      handleDrawerOpen={handleDrawerOpen} 
      handleDrawerClose={handleDrawerClose} 
      isLargeScreen={isLargeScreen} 
      handleAddToCart={onAddToCart} 
      noDataFound={noDataFound} />
    </>
    // </Router>
  );
}

export default TeerexStore;
