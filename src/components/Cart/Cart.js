import React from 'react'
import { useCartContext } from '../../context/cartContext'
import './Cart.css'
import CartEmpty from './CartEmpty/CartEmpty'

const Cart = () => {
    const {cartList , vaciarCarrito , removeItemCarrito, total} = useCartContext()

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
                <div className="listaCarrito">
                <img className="imgCarrito" src={prod.img}/>
                <li className="listadoCarrito" key={prod.id}>  {prod.name} - U: {prod.cantidad} 
                <button onClick={() => removeItemCarrito(prod.id)}>X</button>
                </li>

                </div>
            </div>)
                
                ) }
        <div className="total">
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        
        <button>Terminar Compra</button>
        
        <p>Total : ${total()}</p>

        </div>
        
        </div>
        : 
        
        <CartEmpty />
        }
        
        </>
    
    )
}

export default Cart
