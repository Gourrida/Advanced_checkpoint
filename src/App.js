import React from 'react';

import './App.css';
import ProductTable from './ProductTable';
let products = [
  {
      price : 320,
      name : "T-shirt",
      category  : "Clothes" 
  } 
  ,
  {
    price : 580,
    name : "Iphone 7",
    category  : "Electronics"
  } 
  ,
  {
    price : 100,
    name : "EverSlim",
    category  : "Electronics"
  } ]
function App() {
  return (
    <div className="App">
     <ProductTable products={products}/>
    </div>
  );
}

export default App;
