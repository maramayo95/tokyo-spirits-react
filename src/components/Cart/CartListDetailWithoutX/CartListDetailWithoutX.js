
import { useCartContext } from '../../../context/cartContext';

const CartListDetailWithoutX = () => {
    
    const {cartList } = useCartContext()
    
    
    return (
    
      
      <div>
          

              {cartList.map(prod =>  
                (<div className="contenedorCarrito" key={prod.id}>
                <div className="listaCarrito">
                    <img className="imgCarrito" src={prod.img}/>
                    <li className="listadoCarrito" key={prod.id}>  {prod.name} - U: {prod.cantidad} Precio: {(prod.price) * prod.cantidad}
                    </li>

                </div>
            </div>)
                
                ) }
            
        </div>
    );
};

export default CartListDetailWithoutX;
