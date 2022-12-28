import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../helpers/gFetch";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  console.log(productoId);
  useEffect(()=>{
    gFetch(productoId)
     .then(resp => console)
  }, [])
  return (
    <ItemDetail
       // product={product}
    />
  );
};

export default ItemDetailContainer;
