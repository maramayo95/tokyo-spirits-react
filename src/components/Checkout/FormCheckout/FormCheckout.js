import React from 'react';
import './FormCheckout.css'

const FormCheckout = () => {
  return (
  <div>
        <div className="formContainer">
            <form className="formCheck">
                <input type="text" placeholder='Nombre'></input>
                <input type="text" placeholder='Apellido'></input>
                <input type="email" placeholder='Email'></input>
                <input type="email" placeholder='Escriba nuevamente su email'></input>
                <input type="number" placeholder='Telefono'></input>
                <input type="number" placeholder='Escriba nuevamente su Telefono'></input>
                <textarea type="text" placeholder='Dejanos un comentario'></textarea>
            </form>
                <button>Confirmar Compra </button>
        </div>

  </div>);
};

export default FormCheckout;
