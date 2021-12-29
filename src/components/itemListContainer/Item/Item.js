import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const Item = ({nombre,precio,year,description}) => {
    return (
        <div>
            <h3 className="name">{nombre}</h3>
            <p className="description">{description}</p>
            <p>Año {year}</p>
            <hr></hr>
            
            <h4>Precio: $ {precio}</h4>
            
            <div className="stockCantidad">
            <p>Cantidad: {counter}</p>
            <p>Stock {max}</p>
            </div>

            <ItemCount/>
        </div>
    )
}

export default Item
