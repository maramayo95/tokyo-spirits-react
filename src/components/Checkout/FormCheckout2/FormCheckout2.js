import React from 'react';
import { Formik } from 'formik';

const FormCheckout2 = () => {
    
    
  
    return (
  <div>
      <>
        <Formik
          initialValues={{
              name: '',
              subName: '',
              email: '', 
              confirmEmail: '',
              phone: '', 
              confirmPhone: ''

          }}

          validate={(valuesForm)=> {
              let formErrors = {};
            
              if(!valuesForm.name) {
                formErrors.name = 'Por favor ingrese un nombre'
              } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                formErrors.name = 'El nombre solo puede contener letras '
              }
              
              if(!valuesForm.subName) {
                formErrors.name = 'Por favor ingrese su apellido'
              } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                formErrors.subName = 'El apellido solo puede contener letras '
              }




              if(!valuesForm.email) {
                formErrors.email = 'Por favor ingrese un correo'
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.email)) {
                formErrors.email = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
              }

            if(!valuesForm.confirmEmail ){
                formErrors.confirmEmail = 'Por favor reingrese su correo'
            } else if (valuesForm.email != valuesForm.confirmEmail) {
                formErrors.confirmEmail = 'Los campos deben coincidir'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.confirmEmail)) {
                formErrors.confirmEmail = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
            }

              return formErrors;
          }}

          onSubmit={ (valuesForm) => {
              console.log('Enviado')
              console.log(valuesForm)
          }}
        >
            {({handleSubmit, values , handleChange , handleBlur , errors})=> (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='Ingrese su nombre' 
                            value={values.name} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {errors.name && <div>{errors.name}</div>
                            //hacer lo mismo con todos los campos 
                            }
                            
                    </div>
                    
                    <div>
                        <label htmlFor="subName">Apellido</label>
                        <input 
                            type="text" 
                            id="subName" 
                            name="subName" 
                            placeholder='Ingrese su apellido' 
                            value={values.subName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>

                    <div>
                        <label htmlFor="email">Apellido</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder='Ingrese su email' 
                            value={values.email} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>
                    
                    <div>
                        <label htmlFor="repeatEmail">Apellido</label>
                        <input 
                            type="email" 
                            id="repeatEmail" 
                            name="repeatEmail" 
                            placeholder='Confirme su email' 
                            value={values.confirmEmail} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>
                
                    <div>
                        <label htmlFor="phone">Telefono</label>
                        <input 
                            type="number" 
                            id="phone" 
                            name="phone" 
                            placeholder='Ingrese su teléfono' 
                            value={values.phone} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>
                    
                    <div>
                        <label htmlFor="confirmPhone">Telefono</label>
                        <input 
                            type="number" 
                            id="confirmPhone" 
                            name="confirmPhone" 
                            placeholder='Confirme su teléfono' 
                            value={values.confirmPhone} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </div>

                    <button type="submit">Finalizar Compra</button>

                </form>
            ) }
        </Formik>
      </>

  </div>);
};

export default FormCheckout2;
