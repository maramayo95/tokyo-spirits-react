import React from 'react';
import { useFormContext } from '../../../context/formContext';

const FinalBill = () => {
    
    const {dataForm, dataId} = useFormContext()

  return (
  <div>
      <div>
            <h1>Resumen de tu Compra</h1>
            
            <section className="data-user">
              <h2>Id de la compra {dataId}</h2>
                <p>Nombre : {dataForm.name} </p>
                <p>Apellido: {dataForm.subname} </p>
                <p>Email: {dataForm.email} </p>
                <p>Telefono:{dataForm.phone} </p>
                <p>Mensaje:{dataForm.message} </p>
            </section>

            <section className="data-products">
 
            </section>
        </div>
      
  </div>);
};

export default FinalBill;
