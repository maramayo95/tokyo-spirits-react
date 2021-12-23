import React from 'react'
import '../itemListContainer/ItemListContainer.css'
import Card from './card/Card'

const itemListContainer = ({greeting}) => {
    return (
        <>
        <div className="itemListContainer">
            <h2>{greeting}</h2>
        
        <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>


        </div>
        
        
        
        
        </>
    )
}

export default itemListContainer
