import './filters.css';
import React, { useEffect, useState } from 'react';


const Filters = ({ initialProductsData, setProductsData }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  
  useEffect(() => {
    // Filter products based on selected filters
    const filteredProducts = initialProductsData.filter(item => {
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(item.color);
      const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(item.gender);
      const priceMatch = selectedPrices.length === 0 || selectedPrices.some(range => {
        const [min, max] = range.split(' - ');
        const price = item.price;
        return price >= parseFloat(min) && price <= parseFloat(max);
      });
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.type);
      return colorMatch && genderMatch && priceMatch && typeMatch;
    });
    setProductsData(filteredProducts);
  }, [selectedColors, selectedGenders, selectedPrices, selectedTypes, initialProductsData, setProductsData]);

  const handleColorChange = (e) => {
    const { checked, value } = e.target;
    updateSelectedValues(checked, value, setSelectedColors);
  };

  const handleGenderChange = (e) => {
    const { checked, value } = e.target;
    updateSelectedValues(checked, value, setSelectedGenders);
  };

  const handlePriceChange = (e) => {
    const { checked, value } = e.target;
    updateSelectedValues(checked, value, setSelectedPrices);
  };

  const handleTypeChange = (e) => {
    const { checked, value } = e.target;
    updateSelectedValues(checked, value, setSelectedTypes);
  };

  const updateSelectedValues = (checked, value, setSelectedFunction) => {
    setSelectedFunction(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(item => item !== value);
      }
    });
  };

  return (
    <div className='filter'>
      <div>
        <h3>Color</h3>
        <div className="checkbox-container">
          <input type="checkbox" name='color' value='Red' onChange={handleColorChange} />
          <label>Red</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='color' value='Blue' onChange={handleColorChange} />
          <label>Blue</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='color' value='Green' onChange={handleColorChange} />
          <label>Green</label>
        </div>
      </div>
      <div>
        <h3>Gender</h3>
        <div className="checkbox-container">
          <input type="checkbox" name='gender' value='Men' onChange={handleGenderChange} />
          <label>Men</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='gender' value='Women' onChange={handleGenderChange} />
          <label>Women</label>
        </div>
      </div>
      <div>
        <h3>Price</h3>
        <div className="checkbox-container">
          <input type="checkbox" name='price' value='0 - 250' onChange={handlePriceChange} />
          <label>0 - Rs.250</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='price' value='251 - 450' onChange={handlePriceChange} />
          <label>Rs.251 - Rs.450</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='price' value='451 - Infinity' onChange={handlePriceChange} />
          <label>Rs.451 and Above</label>
        </div>
      </div>
      <div>
        <h3>Type</h3>
        <div className="checkbox-container">
          <input type="checkbox" name='type' value='Polo' onChange={handleTypeChange} />
          <label>Polo</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='type' value='Hoodie' onChange={handleTypeChange} />
          <label>Hoodie</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name='type' value='Basic' onChange={handleTypeChange} />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
