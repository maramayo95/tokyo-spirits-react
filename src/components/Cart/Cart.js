import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const Cart = () => {

    const {cartList} = useContext(CartContext)
    console.log(cartList)
    return (
        <div>
            <h1>Carrito</h1>
        </div>
    )
}

export default Cart
