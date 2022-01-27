import { doc, getFirestore } from 'firebase/firestore'
import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from '../../../helpers/mock.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    const {detalleId} = useParams()
    useEffect(() => {
        
        const db = getFirestore()
        const queryProd = doc(db, 'items', detalleId)
      
    }, [])
    

   
    return (
        <div className="ItemDetailContainer">
            
        <ItemDetail producto={producto}/>

        </div>
    )
}

export default ItemDetailContainer
