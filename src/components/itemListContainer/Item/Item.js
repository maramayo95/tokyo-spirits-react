import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount/ItemCount'
import './Item.css'

const Item = ({id, nombre, img, precio}) => {
    
    return (
        <div id={id}  className="itemContenedor">
            
            <img src={img} alt={nombre}></img>
            <h3 className="name">{nombre}</h3>
            <hr></hr>
            <h4>Precio: $ {precio}</h4>
            
            <hr></hr>
            <Link to={`/detalle/${id}`}>
            <div className="div-btn-detalle">
            <button className="btn-detalle">Detalle del Producto</button>
            </div>        
            </Link>
       
       
       
        </div>
    )
}

export default Item
