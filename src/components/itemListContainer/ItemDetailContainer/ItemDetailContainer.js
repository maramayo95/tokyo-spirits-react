import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from '../../../helpers/mock.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    const {detalleId} = useParams()
    useEffect(() => {
        
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === detalleId)) )
        // console.table(producto)
    }, [])
    

   
    return (
        <div className="ItemDetailContainer">
            
        <ItemDetail producto={producto}/>

        </div>
    )
}

export default ItemDetailContainer
