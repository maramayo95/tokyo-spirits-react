import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import {getFetch} from '../../helpers/mock'
import Spiner from '../Spinner/Spinner'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    const {idCategoria} = useParams()

    // console.log(idCategoria)
    
    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false) )
            
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false) )
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
