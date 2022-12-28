
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = () => {
  const onAdd= (cantidad) => console.log('Cantidad de productos seleccionados',cantidad)
  return (
    
    <div className="row">
      <div className="border border-5 border-success w-50">
        ItemDetail
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