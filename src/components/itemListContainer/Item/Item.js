import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, img, precio , stock}) => {
    const [disabled, setdisabled] = useState(true);
    
    
    return (
        <>
        
            <Link to={`/detalle/${id}`}>
        <div id={id}  className="itemContenedor">
            
            <div className="imgCardContainer">
            <img className="imgCard" src={img} alt={nombre}></img>

            </div>
            
            <h3 className="name">{nombre}</h3>
            <hr></hr>
            <h4>Precio: $ {precio}</h4>
           
           { stock > 1 ? <div className="div-stock"><p className="stock">Stock</p></div> : <div className="div-stock"><p className="no-stock">Agotado</p></div>}
           
           
            
            <hr></hr>
            <div className="div-btn-detalle">
            <button
           
            className="btn-detalle">Detalle del Producto</button>
            </div>        
        </div>
            </Link>
        
        </>
    )
}

export default Item
