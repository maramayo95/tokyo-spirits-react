import React from 'react'

import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  

    return (
        <div className="ItemDetail">
            <img src={producto.img} alt={producto.name}></img>
            <h3>{producto.name}</h3>
            <h4>{producto.year}</h4>
            <h4>{producto.price}</h4>
            <p>{producto.description}</p>
        </div>
    )
}

export default ItemDetail
