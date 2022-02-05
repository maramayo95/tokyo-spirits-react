import { createContext, useContext, useState } from "react";
import { getFirestore, query, collection, getDocs , where, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { useCartContext } from './cartContext';


const FormContext = createContext([])

export function useFormContext() {
    return useContext(FormContext)
}



export const FormContextProvider = ({children}) => {

    const {cartList , total} = useCartContext()

    const initialForm = {
        name: '' , 
        subname: '',
        email: '',
        phone: '',
        comment: '',
        confirmPhone: '',
        confirmEmail: ''
    }

    const [dataForm, setdataForm] = useState(initialForm);
      
    // console.log(dataForm)

      const [dataId, setdataId] = useState('');

      const [error, setError] = useState({
          bool: false,
          text: null
      });

    
    const checkout =  () => {
         
        
        let order = {}
        order.buyer = dataForm
        order.total = total()
    
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.cantidad;
            const cantidad = cartItem.cantidad;
    
            return {id, name, price, cantidad}
        } )
    
        if(dataValidate.includes('')) {
            setError({
                bool: true,
                text: 'Complete los campos faltantes'
            })}
        else if ( dataForm.email !== dataForm.confirmEmail) {
            setError({
                bool: true,
                text: 'Deben coincidir los campos'
            })

        } else if ( dataForm.email.includes(',')) {
            setError({
                bool: true,
                text: 'Un email no debe contener "," '
            })
        } else {
            const db = getFirestore()
            const orderCollection = collection(db, 'orders' )
            addDoc(orderCollection,order)
            .then(resp =>  setdataId(resp.id))
            .catch(err => err)
            .finally(() => dataId)
            
            fRefreshStock();
            
      
        }

    }
    
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

    function handleChange(e) {
        setdataForm({
          ...dataForm,
          [e.target.name]:e.target.value
      
        }
          )
       }
 

     const dataValidate = [ dataForm.name , dataForm.subname, dataForm.email, dataForm.phone, dataForm.comment , dataForm.confirmEmail , dataForm.confirmPhone  ] 
    
    return (
        <FormContext.Provider value={
            {
                error,
                dataForm,
                dataId,
                handleChange ,            
                checkout,
                dataValidate,
                setError

            }
        }>
         {children}
        </FormContext.Provider>
    )

}

