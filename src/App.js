import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import './App.css';



function App() {
  return (
    <>
    <Header />
    <ItemListContainer greeting="En este  sitio encontrarás muchas películas y series de Anime..." />
    </>
  );
}

export default App;
