import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import './App.css';
import ItemDetailContainer from './components/itemListContainer/ItemDetailContainer/ItemDetailContainer.js';



function App() {
  return (
    <>
    <Header greeting="En este  sitio encontrarás muchas películas y series de Anime..." />
    <ItemListContainer  />
    <ItemDetailContainer />
    </>
  );
}

export default App;
