import React , {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({min,max}) => {
    
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
            <h4 className="name">Nombre</h4>
            <h5 className="price">Precio</h5>
            <p className="description">Descripción</p>
            <hr></hr>
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