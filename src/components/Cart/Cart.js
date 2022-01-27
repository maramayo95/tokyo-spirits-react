import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import './Cart.css'
import CartEmpty from './CartEmpty/CartEmpty'

const Cart = () => {
    const {cartList , vaciarCarrito , removeItemCarrito, total} = useCartContext()

    console.log(cartList)
    
    return (
        <>
        <div  className="contenedor">
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
                <button className=" btn-danger" onClick={() => removeItemCarrito(prod.id)}>X</button>
                </li>

                </div>
            </div>)
                
                ) }
       
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
