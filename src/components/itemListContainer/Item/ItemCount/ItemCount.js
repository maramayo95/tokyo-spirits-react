import React , {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({min, max, onAdd}) => {

    
    
    const [counter, setCounter] =  useState(min);   
    const [stock , setStock]  = useState(max);
    
    const Add = () => {
        (counter < max) && setCounter(counter +1) ;
        (stock >= 1) && setStock(stock - 1);

    }

    const onRest = () => {
       (counter > min ) &&  setCounter(counter -1) ;
       (stock < max) && setStock(stock + 1);
    }

    const resetear = () => {
        setCounter(min)
        setStock(max)
    }
    
    
    return (
        <div className="producto">
            
            <div className="stockCantidad">
            <p>Cantidad: {counter}</p>
            <p>Stock {stock}</p>
            </div>

            <div className="buttons">
            <button onClick ={Add}>+</button>
            <button  onClick ={resetear}>Reset</button>
            <button onClick ={onRest}>-</button>
            </div>
                <hr></hr>
            <div className="buy">
            <button onClick={()=> onAdd(counter)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount