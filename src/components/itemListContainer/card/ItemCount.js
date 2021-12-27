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
            <h4 className="name">{nombre}</h4>
            <h5 className="price">{precio}</h5>
            <p className="description">{description}</p>
            <hr></hr>
            <p>Precio: $ {precio}</p>
            <p className="cantidad">Cantidad: {counter}</p>
            <p className="stock">Stock {max}</p>
            <div className="buttons">
            <button onClick ={onAdd}>+</button>
            <button  onClick ={resetear}>Reset</button>
            <button onClick ={onRest}>-</button>
            
            </div>
        </div>
    )
}

export default ItemCount