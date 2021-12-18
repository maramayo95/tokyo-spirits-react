import React from 'react'
import { FaOpencart } from "react-icons/fa";
import './NavBar.css';

const CartWidget = () => {
    return (
        <div>
            <FaOpencart className="cart-icon" />
        </div>
    )
}

export default CartWidget
