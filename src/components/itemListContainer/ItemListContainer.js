import {useState, useEffect} from 'react'
import '../itemListContainer/ItemListContainer.css'
import ItemCount from './card/ItemCount'
import {getFetch} from '../../helpers/mock'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> console.log('Se ejecuta al final'))
        
    }, [])
    
    
    
    return (
        <>
        <div className="itemListContainer">
            <h2>{greeting}</h2>
        <div className="cards">
        
        {productos.map(producto => <ItemCount max={10} min={1} key={producto.id} nombre={producto.name} precio={producto.price} year={producto.year} description={producto.description}/>)}
        
        </div>


        </div>
        
        
        
        
        </>
    )
}

export default ItemListContainer
