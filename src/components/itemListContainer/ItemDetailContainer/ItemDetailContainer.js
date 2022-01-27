import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React , {useEffect, useState} from 'react'
import Spinner from '../../Spinner/Spinner'
import { useParams } from 'react-router-dom'
import {getFetch} from '../../../helpers/mock.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const [mostrar, setmostrar] = useState(true);

    const {detalleId} = useParams()
    useEffect(() => {
        
        const db = getFirestore()
        const queryProd = doc(db, 'items', detalleId)
        getDoc(queryProd)
        .then((resp)=>{setproducto({id: resp.id, ...resp.data()})})
        .catch(err => err)
        .finally(()=> setmostrar(false))

    }, [detalleId])
    

   
    return (
        <div className="ItemDetailContainer">
        {mostrar ? <Spinner/> : <ItemDetail producto={producto}/>}    
         
        </div>
    )
}

export default ItemDetailContainer
