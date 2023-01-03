import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react'

const ItemDetail = ({ product }) => {
  const [compra, setCompra]= useState(false)
  const onAdd = (cantidad) =>{
    console.log("Cantidad de productos seleccionados", cantidad);
    setCompra(true)}
  return (
    <div className="row">
      <div className="border border-5 border-success w-50">
        <h2>{product.nombre}</h2>
        <img src={product.foto} className="w-25" alt="imagen del producto" />
        <h4>{product.categoria}</h4>
        <h4>{product.price}</h4>
      </div>
      <div className="col">
        {compra ? (
          <div>
            <Link className="btn btn-outline-primary " to="/">
              Seguir Comprando
            </Link>
            <Link className="btn btn-outline-primary " to="/cart">
              Ir al carrito
            </Link>
          </div>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
