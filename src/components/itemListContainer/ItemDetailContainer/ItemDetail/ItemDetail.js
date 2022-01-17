import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../Item/ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  
   const [show, setshow] = useState(true)

   const onAdd = (counter) => {
       setshow(false)
       console.log(`Usted ha comprado ${counter} productos de ${producto.name}`)
       alert(`Usted ha comprado ${counter} productos de ${producto.name}`)
       
   } 

    return (
        <div className="ItemDetail">
            <img src={producto.img} alt={producto.name}></img>
            <h3>{producto.name}</h3>
            <h4>{producto.year}</h4>
            <h4>{producto.price}</h4>
            <p>{producto.description}</p>

       
        {show ? <ItemCount max={10} min={1} onAdd={onAdd} /> : 
        <div>
             <Link  to="/cart"><button>Terminar la Compra</button></Link>
             <Link to="/"><button>Seguir Comprando</button></Link>
             </div> }
            
       
       
        </div>
    )
}

export default ItemDetail
