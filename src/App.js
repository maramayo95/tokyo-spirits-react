import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import './App.css';
import ItemDetailContainer from './components/itemListContainer/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header greeting="En este  sitio encontrarás muchas películas y series de Anime..." />
    <Routes>
     <Route exact path='/' element={<ItemListContainer/>}/> 
     <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/> 
     <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/> 
     <Route exact path='/cart' element={<Cart/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
