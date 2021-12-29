import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'



const ItemList = ({productos}) => {
    return (
        <div className="productos">
            { productos.map(producto => <Item nombre ={producto.name} precio ={producto.precio} year={producto.year} description={producto.description} /> )}
        </div>
    )
}

export default ItemList
