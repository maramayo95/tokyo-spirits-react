import React from 'react';
import {Link} from 'react-router-dom'
import CartWidget from '../../header/navbar/CartWidget';
import './CartEmpty.css';

const CartEmpty = () => {
  
  
    return (
        
        <div className="cartEmpty">
            <CartWidget />

            <h2>Oops el carrito esta vacio</h2>
            <h3>Clickea en el boton para poder comprar</h3>
            
            <Link to="/">  <button>Ir al inicio</button> </Link>

        </div>
    )
};

export default CartEmpty;
