import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './Item.css'
const Item = ({nombre,precio,year,description}) => {
    return (
        <div className="itemContenedor">
            <h3 className="name">{nombre}</h3>
            <p className="description">{description}</p>
            <p>Año {year}</p>
            <hr></hr>
            <h4>Precio: $ {precio}</h4>
            <ItemCount max={10} min={1} />
        </div>
    )
}

export default Item
