import React from 'react'
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const {cartList , vaciarCarrito , removeItemCarrito} = useCartContext()

    //console.log(cartList)
    return (
        <>
        <h1>Odio el carrito</h1>

        {cartList.map(prod =>  
            (<div key={prod.id}>
             <li className="listadoCarrito" key={prod.id}>{prod.name} - cant: {prod.cantidad} 
             <button onClick={() => removeItemCarrito(prod.id)}>X</button>
             </li>
            </div>)
              ) }
              
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    
    )
}

export default Cart
