import { useCartContext } from "../../assets/context/CartContext"


const CartContainer = () => {
  
  const {cartList, vaciarCarrito} =useCartContext
  console.log(cartList)
  return (
    <div>
      { cartList.map(product => <li key={product.id}>
        <img src={product.foto} alt="" className="w-25"/>
        {product.nombre} - Cantidad: {product.cantidad} - Precio {product.price}
        <button className="btn" onClick={()=>console.log('Eliminando Item')}></button>
        <button className="btn btn-outline-danger"
         onClick={vaciarCarrito }
        >
          Vaciar Carrito
          </button>
      </li>)

      }
    </div>
  )
}

export default CartContainer