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

    function total () {
        const sumaTotal = cartList.map(valorTotal => valorTotal.cantidad * valorTotal.price).reduce((prev,curr)=> prev + curr,0)

        return sumaTotal
    }

    function mostrarCantidad () {
        const mostrar = cartList.map( mostrar => mostrar.cantidad).reduce((prev,curr) => prev + curr,0)

        return mostrar
    }
    
    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarAlCarrito,
                vaciarCarrito,
                removeItemCarrito,
                mostrarCantidad,
                total,
            } }>
            {children}
        </CartContext.Provider>
    )
 }