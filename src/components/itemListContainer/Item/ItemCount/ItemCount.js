import React , {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({min,max}) => {

    
    
    const [counter, setCounter] =  useState(min);   
    const [stock , setStock]  = useState(9);
    
    const onAdd = () => {
        (counter < max) && setCounter(counter +1) ;
        (stock >= 1) && setStock(stock - 1);

    }

    const onRest = () => {
       (counter > min ) &&  setCounter(counter -1) ;
       (stock < 9) && setStock(stock + 1);
    }

    const resetear = () => {
        setCounter(min)
        setStock(9)
    }
    
    
    return (
        <div className="producto">
            
            <div className="stockCantidad">
            <p>Cantidad: {counter}</p>
            <p>Stock {stock}</p>
            </div>

            <div className="buttons">
            <button onClick ={onAdd}>+</button>
            <button  onClick ={resetear}>Reset</button>
            <button onClick ={onRest}>-</button>
            </div>
                <hr></hr>
            <div className="buy">
            <button>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount