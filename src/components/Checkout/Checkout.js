import React from 'react';
import { useCartContext } from '../../context/cartContext';
import CartEmpty from '../Cart/CartEmpty/CartEmpty';
import './Checkout.css'
import FormCheckout2 from './FormCheckout2/FormCheckout2';


const Checkout = () => {
  
  
  const {cartList} = useCartContext()

  return <div>
     {
       
      cartList.length > 0 ? 
      <div  className="CheckoutOn"> 
       <FormCheckout2/>
      </div>  

      
     : 
      <CartEmpty />
     }  
      
      
  
  
  </div>;
};

export default Checkout;
