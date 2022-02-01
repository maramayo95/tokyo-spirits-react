import React from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from '../../../context/formContext';
import CartListDetailWithoutX from '../../Cart/CartListDetailWithoutX/CartListDetailWithoutX';
import './FinalBill.css'
const FinalBill = () => {
    
    const {dataForm, dataId} = useFormContext()

  return (
  <div>
            <h1 className="container">Resumen de tu Compra</h1>
            
      <div className="container bill-container">
            <section className="data-user">
              <h2 className="idBill">Id de la compra {dataId}</h2>
                <p>Nombre : {dataForm.name} </p>
                <p>Apellido: {dataForm.subname} </p>
                <p>Email: {dataForm.email} </p>
                <p>Telefono:{dataForm.phone} </p>
                <p>Mensaje: {dataForm.comment} </p>
            </section>

            <section className="data-products">
              <CartListDetailWithoutX/>
            </section>
        
        <Link to="/">
        <button>Volver al Inicio</button>
        </Link>
        </div>

      
  </div>);
};

export default FinalBill;
