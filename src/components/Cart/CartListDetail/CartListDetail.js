
import { useCartContext } from '../../../context/cartContext';

const CartListDetail = () => {
    
    const {cartList , removeItemCarrito } = useCartContext()
    
    
    return (
    
      
      <div>
          

              {cartList.map(prod =>  
                (<div className="contenedorCarrito" key={prod.id}>
                <div className="listaCarrito">
                    <img className="imgCarrito" src={prod.img}/>
                    <li className="listadoCarrito" key={prod.id}>  {prod.name} - U: {prod.cantidad} Precio: {(prod.price) * prod.cantidad}
                        <button className=" btn-danger" onClick={() => removeItemCarrito(prod.id)}>X</button>
                    </li>

                </div>
            </div>)
                
                ) }
            
        </div>
    );
};

export default CartListDetail;
