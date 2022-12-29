
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  const onAdd= (cantidad) => console.log('Cantidad de productos seleccionados',cantidad)
  return (
    
    <div className="row">
      <div className="border border-5 border-success w-50">
        <h2>{product.nombre}</h2>
        <img src={product.foto} className=''w-25 alt='imagen del producto'/>
        <h4>{product.categoria}</h4>
        <h4>{product.price}</h4>
      </div>
      <div className='col'>
         <ItemCount 
         stock={10}
         initial={1}
         onAdd={onAdd}
         />
         
      </div>
    </div>
  )
}

export default ItemDetail