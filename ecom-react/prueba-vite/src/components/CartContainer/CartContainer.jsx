import { useCartContext } from "../../assets/context/CartContext";

const CartContainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext();
  console.log(cartList);
  return (
    <div>
      {cartList.map((product) => (
        <li key={product.id}>
          <img src={product.foto} alt="" className="w-25" />
          {product.nombre} - Cantidad: {product.cantidad} - Precio{" "}
          {product.price}
          <button
            className="btn"
            onClick={() => eliminarItem(product.id)}
          > <i class="bi bi-x-circle"></i></button>
        </li>
      ))}
      { precioTotal() > 0 && <label>El precio total es: { precioTotal()}</label>}<br/>
      <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default CartContainer;
