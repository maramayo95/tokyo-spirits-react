import {useState} from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import './FormCheckout2.css'
import { useCartContext } from '../../../context/cartContext';
import { getFirestore, query, collection, getDocs , where, addDoc, documentId, writeBatch } from 'firebase/firestore'


const FormCheckout2 = () => {
    
    const {cartList, total}  = useCartContext();
    
    const [formSend, setformSend] = useState(false); 
    
    
    const [dataId, setdataId] = useState('');
    
    console.log(dataId)

    const fRefreshStock = async () => {
      const db = getFirestore();
      const collectionStock = collection(db,'items')
      const queryStockRefresh = query(
           collectionStock, where(documentId(), 'in', cartList.map(it=> it.id))
           )
  
        const batch = writeBatch(db)
        
        await getDocs(queryStockRefresh)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))
        batch.commit()
  
  
  }  
    
    return (
  <div>
      <>
        <Formik
          initialValues={
              {
              name: '',
              subName: '',
              email: 'something@something.com', 
              confirmEmail: 'something@something.com',
              phone: '', 
              confirmPhone: ''
              }
            }

          validate ={(valuesForm)=> {
              
              let formErrors = {};
            
              if(!valuesForm.name) {
                formErrors.name = 'Por favor ingrese un nombre'
              } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                formErrors.name = 'El nombre solo puede contener letras '
              }
              
              if(!valuesForm.subName) {
                formErrors.subName = 'Por favor ingrese su apellido'
              } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                formErrors.subName = 'El apellido solo puede contener letras '
              }

              if(!valuesForm.phone){
                  formErrors.phone = 'Debes ingresar un numero de teléfono'
              } else if (!/^[0-9]{4,10}$/.test(valuesForm.phone)) {
                  formErrors.phone = 'El teléfono debe contener numeros'
              } 
              
              if(!valuesForm.confirmPhone){
                  formErrors.confirmPhone = 'Debes reingresar el numero de teléfono'
              } else if(valuesForm.confirmPhone != valuesForm.phone){
                  formErrors.confirmPhone  = 'Los campos deben coincidir'
              } else if (!/^[0-9]{4,10}$/.test(valuesForm.phone)) {
                  formErrors.confirmPhone = 'El teléfono debe contener numeros'
              }


              if(!valuesForm.email) {
                formErrors.email = 'Por favor ingrese un correo'
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.email)) {
                formErrors.email = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
              }

              if ( valuesForm.confirmEmail !== valuesForm.email ) {
                 
                formErrors.confirmEmail = 'Los campos deben coincidir'
             } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.confirmEmail)) {
                formErrors.confirmEmail = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
             }

              return formErrors;
          }}

          onSubmit={ (valuesForm, {resetForm}) => {
              console.log(valuesForm) //Se pueden usar para mandar a una base de datos o una api 

              

                let order = {}
                order.buyer = valuesForm
                order.total = total()
            
                order.items = cartList.map(cartItem => {
                    const id = cartItem.id;
                    const name = cartItem.name;
                    const price = cartItem.price * cartItem.cantidad;
                    const cantidad = cartItem.cantidad;
            
                    return {id, name, price, cantidad}
                  } )
                
                  const db = getFirestore()
                    const orderCollection = collection(db, 'orders' )
                    addDoc(orderCollection,order)
                    .then(resp =>  setdataId(resp.id))
                    .catch(err => err)
                    .finally(() => dataId )
         
          fRefreshStock();

            resetForm();
 
            setformSend(true)
            setTimeout(()=> setformSend(false),5000);

          }}
        >
            {({ errors })=> (
                <Form >
                    <section className="form-container">
                        <div className="input-field">
                            <label htmlFor="name">Nombre</label>
                            <Field 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder='Ingrese su nombre' 
                                />
                                <ErrorMessage name="name" component={()=> <div>{errors.name}</div>} />
                        </div>
                        
                         <div className="input-field">
                            <label htmlFor="subName">Apellido</label>
                            <Field 
                                type="text" 
                                id="subName" 
                                name="subName" 
                                placeholder='Ingrese su apellido' 
                                />
                                <ErrorMessage name="subName" component={()=> <div>{errors.subName}</div>} />

                        </div>

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <Field 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder='Ingrese su email' 
                                />
                                <ErrorMessage name="email" component={()=> <div>{errors.email}</div>} />
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor="repeatEmail">Repetir Email</label>
                            <Field 
                                type="email" 
                                id="confirmEmail" 
                                name="confirmEmail" 
                                placeholder='Confirme su email' 
                                />
                                <ErrorMessage name="confirmEmail" component={()=> <div>{errors.confirmEmail}</div>} />
                        </div>
                    
                        <div className="input-field">
                            <label htmlFor="phone">Telefono</label>
                            <Field 
                                type="number" 
                                id="phone" 
                                name="phone" 
                                placeholder='Ingrese su teléfono' 
                                />
                                <ErrorMessage name="phone" component={()=> <div>{errors.phone}</div>} />
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor="confirmPhone">Telefono</label>
                            <Field 
                                type="number" 
                                id="confirmPhone" 
                                name="confirmPhone" 
                                placeholder='Confirme su teléfono' 
                                />
                                <ErrorMessage name="confirmPhone" component={()=> <div>{errors.confirmPhone}</div>} />
                        </div>

                        <button type="submit">Finalizar Compra</button>
                        { formSend && <p>Formulario enviado con éxito </p>}
                    </section>
                </Form>
            ) }
        </Formik>
      </>

  </div>);
};

export default FormCheckout2;
