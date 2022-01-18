import { Children, createContext, useState} from 'react'

 export const CartContext = createContext([])

 export const CartContextProvider = ({children})  => {
     
    const [cartList, setcartList] = useState([])

    function agregarAlCarrito(items) {
        setcartList(...cartList ,items)
    }
    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarAlCarrito
            } }>
            {children}
        </CartContext.Provider>
    )
 }