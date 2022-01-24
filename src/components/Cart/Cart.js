import React from 'react'
import { useCartContext } from '../../context/cartContext'
import './Cart.css'
import CartEmpty from './CartEmpty/CartEmpty'

const Cart = () => {
    const {cartList , vaciarCarrito , removeItemCarrito} = useCartContext()

    console.log(cartList)
    
    return (
        <>
        <div className="h1Cart">
        <h1>Tus Compras</h1>

        </div>
        
        
        {cartList.length > 0 ? 
        
        <div>

        {cartList.map(prod =>  
            (<div className="contenedorCarrito" key={prod.id}>
             <li className="listadoCarrito" key={prod.id}>{prod.name} - cant: {prod.cantidad} 
             <button onClick={() => removeItemCarrito(prod.id)}>X</button>
             </li>
            </div>)
                
                ) }
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        
        </div>
        : 
        
        <CartEmpty />
        }
        
        </>
    
    )
}

export default Cart
