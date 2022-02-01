import { createContext, useContext, useState } from "react";
import { getFirestore, query, collection, getDocs , where, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { useCartContext } from './cartContext';


const FormContext = createContext([])

export function useFormContext() {
    return useContext(FormContext)
}



export const FormContextProvider = ({children}) => {

    const {cartList , total} = useCartContext()

    const [dataForm, setdataForm] = useState({
        name: '' , 
        subname: '',
        email: '',
        phone: '',
        comment: ''
      });
      
    

      const [dataId, setdataId] = useState('');

    
    const checkout = async (e) => {
        
        e.preventDefault()
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
    
        const db = getFirestore()
        const orderCollection = collection(db, 'orders',  )
        await addDoc(orderCollection,order)
        .then(resp => {
            setdataId(resp.id)
            console.log(resp.id)
        })
        .catch(err => err)
        .finally(() => console.log("Compra realizada"))
        
        fRefreshStock();
    
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

    
    return (
        <FormContext.Provider value={
            {
                dataForm,
                dataId,
                handleChange,
                checkout,
               

            }
        }>
         {children}
        </FormContext.Provider>
    )

}

