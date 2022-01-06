import React , {useEffect, useState} from 'react'
import {getFetch} from '../../../helpers/mock.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    useEffect(() => {
        
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === '1')) )
        console.table(producto)
    }, [])
    

   
    return (
        <div className="ItemDetailContainer">
            
        <ItemDetail producto={producto}/>

        </div>
    )
}

export default ItemDetailContainer
