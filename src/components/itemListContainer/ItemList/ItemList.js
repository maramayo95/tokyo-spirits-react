import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'



const ItemList = ({productos}) => {
    return (
        <div className="productos">
            { productos.map(producto => <Item key={producto.id} id={producto.id} nombre ={producto.name}  img={producto.img} precio ={producto.price} year={producto.year} description={producto.description} /> )}
        </div>
    )
}

export default ItemList
