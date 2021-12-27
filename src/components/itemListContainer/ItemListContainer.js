import {useState, useEffect} from 'react'
import '../itemListContainer/ItemListContainer.css'
import ItemCount from './card/ItemCount'
import {getFetch} from '../../helpers/mock'
import Spiner from '../Spinner/Spinner'
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
        loading ?  <Spiner/> :
        productos.map(producto => <ItemCount max={10} min={1} key={producto.id} nombre={producto.name} precio={producto.price} year={producto.year} description={producto.description}/>)}
        </div>
        </div>
        </>
    )
}

export default ItemListContainer
