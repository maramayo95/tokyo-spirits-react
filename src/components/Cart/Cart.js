import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import './Cart.css'
import CartEmpty from './CartEmpty/CartEmpty'
import CartListDetail from './CartListDetail/CartListDetail'

const Cart = () => {
    const {cartList , vaciarCarrito , total} = useCartContext()

    
    
    return (
        <>
        <div  className="contenedor">
        <div className="h1Cart">
        <h1>Tus Compras</h1>
        </div>
        
        
        {cartList.length > 0 ? 
        
    <div>

        <CartListDetail />
       
        <div className="totalPrice"> 
        <p>Total : ${total()}</p>
        </div>
        
        <div className="total">

        <div className="botonesCarrito">
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/"> <button >Seguir Comprando</button> </Link>
        <Link to="/checkout"><button>Ir al Checkout</button></Link>
        </div>
        

        </div>
        
        </div>
        : 
        
        <CartEmpty />
    }
        
        </div>
        </>
    
    )
}

export default Cart
