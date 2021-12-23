import React , {useState} from 'react';
import './Card.css'


const Card = () => {
    
    const [counter, setCounter] =  useState(1);   
    
    const sumar = () => {
        setCounter(counter +1)

    }

    const restar = () => {
        setCounter(counter -1)
    }

    const resetear = () => {
        setCounter(1)
    }
    
    
    return (
        <div className="producto">
            <h4 className="name">Nombre</h4>
            <h5 className="price">Precio</h5>
            <p className="description">Descripción</p>
            <hr></hr>
            <p className="stock">Cantidad: {counter}</p>
            <div className="buttons">
            <button onClick ={sumar}>+</button>
            <button onClick ={resetear}>Reset</button>
            <button onClick ={restar}>-</button>
            
            </div>
        </div>
    )
}

export default Card