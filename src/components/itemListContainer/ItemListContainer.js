import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import {getFetch} from '../../helpers/mock'
import Spiner from '../Spinner/Spinner'
import ItemList from './ItemList/ItemList'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
    }, [])
    
    
    
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
