import './FormCheckout.css'
import { useFormContext } from '../../../context/formContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FormCheckout = () => {
  const {dataForm, handleChange, checkout}  = useFormContext()

  const [confirmarCompra, setconfirmarCompra] = useState(true);

  function handleFalsestate() {
    setconfirmarCompra(false)
  }


  return (
  <div>
        <div className="formContainer">
            <form  className="formCheck">
                <input  type="text" name="name" placeholder='Nombre' onChange={handleChange} value={dataForm.name}/>
                <input type="text" name="subname" placeholder='Apellido' onChange={handleChange} value={dataForm.subname}/>
                <input type="email" name="email" placeholder='Email' onChange={handleChange} value={dataForm.email}/>
                <input type="email" name="email" placeholder='Confirmar email' onChange={handleChange} value={dataForm.email}/>
                <input type="number" name="phone" placeholder='Telefono' onChange={handleChange} value={dataForm.phone}/>
                <input type="number" name="phone" placeholder='Confirmar Telefono' onChange={handleChange} value={dataForm.phone}/>
                <textarea type="text" name="comment" placeholder='Dejanos un comentario' onChange={handleChange} value={dataForm.comment}/>

              {
                confirmarCompra ?  
                 <button onClick={checkout , handleFalsestate}>Confirmar Compra</button> 
                : 
                <Link to="/finalBill"><button >Ver Factura</button></Link>

              }
              
             
               
              </form>

                
        </div>
        
        
        

        

  </div>);
};

export default FormCheckout;
