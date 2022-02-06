import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import {getFetch} from '../../helpers/mock'
import Spiner from '../Spinner/Spinner'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, query, collection, getDocs , where } from 'firebase/firestore'


const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    const {idCategoria} = useParams()

    
     
    
    useEffect(() => {
            if (idCategoria) {
                const db = getFirestore()
                const queryCollection = query(collection(db , 'items'), where('categoria', '==', idCategoria))
                getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data()})) ))
                .catch(err => err)
                .finally(() => setLoading(false))
            } else {
                const db = getFirestore()
                const queryCollection = query(collection(db , 'items'))
                getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data()})) ))
                .catch(err => err)
                .finally(() => setLoading(false))
                
            }
        
    }, [idCategoria])

    
    
    
    return (
        <>
        
        <div className="itemListContainer">
        <div className="cards">
        {
        loading ?  <Spiner/> :<ItemList productos={productos} />
        }
        </div>
        </div>
        </>
    )
}

export default ItemListContainer
