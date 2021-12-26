import React from 'react'
import '../itemListContainer/ItemListContainer.css'
import ItemCount from './card/ItemCount'
import helpers from '../../helpers/mock'

const itemListContainer = ({greeting}) => {
    return (
        <>
        <div className="itemListContainer">
            <h2>{greeting}</h2>
        
        <div className="cards">
        <ItemCount  max={10} min={1}/>
        
        </div>


        </div>
        
        
        
        
        </>
    )
}

export default itemListContainer
