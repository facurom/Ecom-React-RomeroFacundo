import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../helpers/gFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const[product, setProduct] = useState({})
  const { productoId } = useParams();
  console.log(productoId);
  useEffect(()=>{
    gFetch(productoId)
     .then(resp => setProduct)
     .catch(err =>console.log(err))
  }, [])
  return (
    <ItemDetail
       product={product}
    />
    
  );
};

export default ItemDetailContainer;
