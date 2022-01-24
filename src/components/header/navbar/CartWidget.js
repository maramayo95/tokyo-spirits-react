import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { useCartContext } from '../../../context/cartContext';
import './NavBar.css';



const CartWidget = () => {

    const {cartList , vaciarCarrito , removeItemCarrito, total , mostrarCantidad} = useCartContext()
  
        
    return (
        <div className="carritoSeccion">
            <FaOpencart className="cart-icon" />
            
            
            {cartList.length > 0 && <p className="cantidadNav">{mostrarCantidad()}</p> }
        </div>
    )
}

export default CartWidget
