import './FormCheckout.css'
import { useFormContext } from '../../../context/formContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FormCheckout = () => {
  // expresión regular validar  solo letras ^[A-Z]+$/i
  // Expresión Regular Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

  const {dataForm, checkout , setdataForm,  error, handleChange }  = useFormContext()

  const [confirmarCompra, setconfirmarCompra] = useState(true);

  function handleFalsestate(e) {
    e.preventDefault()
    
    if (error.bool == false ) {
      setconfirmarCompra(false)
        checkout()

    }

    
  }

  
  
   console.log(error)
  return (
  <div>
        <div className="formContainer">
            <form onSubmit={handleFalsestate} className="formCheck">
                <input required type="text" name="name" placeholder='Nombre' onChange={ handleChange} value={dataForm.name}/>
                <input type="text" name="subname" placeholder='Apellido' onChange={handleChange} value={dataForm.subname}/>
                <input type="email" name="email" placeholder='Email' onChange={handleChange} value={dataForm.email}/>
                <input type="email" name="confirmEmail" placeholder='Confirmar email' onChange={handleChange} value={dataForm.confirmEmail}/>
                <input type="number" name="phone" placeholder='Telefono' onChange={handleChange} value={dataForm.phone}/>
                <input type="number" name="confirmPhone" placeholder='Confirmar Telefono' onChange={handleChange} value={dataForm.confirmPhone}/>
                <textarea type="text" name="comment" placeholder='Dejanos un comentario' onChange={handleChange} value={dataForm.comment}/>

                 {
                  error.bool && <h5 className="error-checkout">{error.text}</h5>

                } 

              {
                confirmarCompra ?  
                 <button type="submit" >Confirmar Compra</button> 
                : 
                <Link to="/finalBill"><button >Ver Factura</button></Link>

              }
              
             
               
              </form>

                
        </div>
        
        
        

        

  </div>);
};

export default FormCheckout;
