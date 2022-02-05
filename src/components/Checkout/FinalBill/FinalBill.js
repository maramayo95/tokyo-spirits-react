import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/cartContext';
import { useFormContext } from '../../../context/formContext';
import CartListDetailWithoutX from '../../Cart/CartListDetailWithoutX/CartListDetailWithoutX';
import './FinalBill.css'
const FinalBill = () => {
    const {vaciarCarrito} = useCartContext()    
    const {dataForm, dataId ,setdataForm, initialForm } = useFormContext()
  
    function handleResetPetition() {
      vaciarCarrito() 
      setdataForm(initialForm)
    }
  
    return (
  <div>
            <h1>Su compra ha sido realizada con éxito</h1>
            <h2 className="container">Resumen de tu Compra</h2>
            
      <div className="container bill-container">
            <section className="data-user">
              <p className="idBill">Id de la compra {dataId}</p>
                <p>Nombre : {dataForm.name} </p>
                <p>Apellido: {dataForm.subname} </p>
                <p>Email: {dataForm.email} </p>
                <p>Telefono:{dataForm.phone} </p>
                <p>Mensaje: {dataForm.comment} </p>
            </section>

            <section className="data-products">
              <CartListDetailWithoutX/>
            </section>
        
        <div className="btn-form">
          <Link to="/">
          <button onClick={handleResetPetition}>Volver al Inicio</button>
          </Link>
        </div>


        </div>

      
  </div>);
};

export default FinalBill;
