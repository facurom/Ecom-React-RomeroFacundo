import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  console.log(productoId);
  return (
    <ItemDetail
    // product={product}
    />
  );
};

export default ItemDetailContainer;
