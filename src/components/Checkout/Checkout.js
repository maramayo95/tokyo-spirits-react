import React from 'react';
import { useCartContext } from '../../context/cartContext';
import CartEmpty from '../Cart/CartEmpty/CartEmpty';
import CartListDetail from '../Cart/CartListDetail/CartListDetail';
import './Checkout.css'
import FormCheckout2 from './FormCheckout2/FormCheckout2';


const Checkout = () => {
  
  
  const {cartList, total , vaciarCarrito } = useCartContext()

  return <div>
     {
       
      cartList.length > 0 ? 
      <div  className="CheckoutOn"> 
        <div className="headerCheck">
          <h1>Ya casi lo tenes</h1>
        </div>

        <section className="container formGrid">
          <div className="formCheckout"> 
          <p>Completa tus datos</p>
            <FormCheckout2/>
          </div>
      
          <div className="abstractCard">
            <CartListDetail />
          
            <div className="totalPriceCheckout"> 
            <p>Total : ${total()}</p>
            </div>  
            <button className="btn-emptyChart" onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
        
        
        </section>
      
      
      </div>  

      
     : 
      <CartEmpty />
     }  
      
      
  
  
  </div>;
};

export default Checkout;
