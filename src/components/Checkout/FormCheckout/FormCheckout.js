import { useCartContext } from '../../../context/cartContext';
import { getFirestore, query, collection, getDocs , where, addDoc, documentId, writeBatch } from 'firebase/firestore'
import './FormCheckout.css'
import { useState } from 'react';

const FormCheckout = () => {

  const [dataForm, setdataForm] = useState({
    name: '' , 
    subname: '',
    email: '',
    phone: '',
    comment: ''
  });

  const {cartList , total} = useCartContext()

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
    .then(resp => console.log(resp.id))
    .catch(err => err)
    .finally(() => console.log("Compra realizada"))
    
    fRefreshStock()
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
  <div>
        <div className="formContainer">
            <form onSubmit={() => checkout}  className="formCheck">
                <input  type="text" name="name" placeholder='Nombre' onChange={handleChange} value={dataForm.name}/>
                <input type="text" name="subname" placeholder='Apellido' onChange={handleChange} value={dataForm.subname}/>
                <input type="email" name="email" placeholder='Email' onChange={handleChange} value={dataForm.email}/>
                <input type="email" name="email" placeholder='Confirmar email' onChange={handleChange} value={dataForm.email}/>
                <input type="number" name="phone" placeholder='Telefono' onChange={handleChange} value={dataForm.phone}/>
                <input type="number" name="phone" placeholder='Confirmar Telefono' onChange={handleChange} value={dataForm.phone}/>
                <textarea type="text" name="comment" placeholder='Dejanos un comentario' onChange={handleChange} value={dataForm.comment}/>
            </form>
                
                <button onClick={checkout}>Confirmar Compra </button>
        </div>

  </div>);
};

export default FormCheckout;
