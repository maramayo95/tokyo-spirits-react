import { Children, createContext, useContext, useState} from 'react'

 const CartContext = createContext([])
 
 export function useCartContext() {
     return useContext(CartContext)
 }

 

 export const CartContextProvider = ({children})  => {
     
    const [cartList, setcartList] = useState([])

    function agregarAlCarrito (items) {
        
        const indice=cartList.findIndex(i => i.id === items.id)
       
        if (indice > -1){
            const cantidadVieja= cartList[indice].cantidad
            let cantidadNueva= cantidadVieja + items.cantidad
            cartList[indice].cantidad=cantidadNueva
            let arrAux = [...cartList]
            setcartList(arrAux)
    
        }else{
            setcartList([...cartList, items])
        }
    }

    function vaciarCarrito(){
        setcartList([])
    }
 
    function removeItemCarrito(itemId){
        
        setcartList(cartList.filter(item => item.id !== itemId))
        console.log("Click")
        
    }
    
    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarAlCarrito,
                vaciarCarrito,
                removeItemCarrito
            } }>
            {children}
        </CartContext.Provider>
    )
 }