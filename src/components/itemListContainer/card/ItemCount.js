import React , {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({min,max,nombre,precio,year,description}) => {
    
    const [counter, setCounter] =  useState(min);   
    
    const onAdd = () => {
        (counter < max) && setCounter(counter +1) ;

    }

    const onRest = () => {
       (counter > min ) &&  setCounter(counter -1) ;
    }

    const resetear = () => {
        setCounter(min)
    }
    
    
    return (
        <div className="producto">
            <h3 className="name">{nombre}</h3>
            <p className="description">{description}</p>
            <p>Año {year}</p>
            <hr></hr>
            
            <h4>Precio: $ {precio}</h4>
            
            <div className="stockCantidad">
            <p>Cantidad: {counter}</p>
            <p>Stock {max}</p>
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