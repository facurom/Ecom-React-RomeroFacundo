import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = () => {
  return (
    
    <div className="row">
      <div className="border border-5 border-success w-50">
        ItemDetail
      </div>
      <div className='col'>
         <ItemCount stock={10}/>
      </div>
    </div>
  )
}

export default ItemDetail