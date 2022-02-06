import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import './App.css';
import ItemDetailContainer from './components/itemListContainer/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { CartContextProvider } from './context/cartContext.js';
import { FormContextProvider } from './context/formContext.js';
import Checkout from './components/Checkout/Checkout.js';
import FormCheckout2 from './components/Checkout/FormCheckout2/FormCheckout2.js';


function App() {
  return (
    <>
      <CartContextProvider>
          <BrowserRouter>
              <Header greeting="En este  sitio encontrarás muchas películas y series de Anime..." />
            <Routes>
              <Route exact path='/' element={<ItemListContainer/>}/> 
              <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/> 
              <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/> 
              <Route exact path='/cart' element={<Cart/>}/> 
              <Route exact path="/checkout" element={<Checkout/>} />
              <Route exact path="/formCheckout2" element={<FormCheckout2/>}/>
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
