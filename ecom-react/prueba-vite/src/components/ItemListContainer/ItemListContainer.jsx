import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";
import {Link, useParams} from 'react-router-dom';
import Formulario from "../Formulario/formulario";
import Titulo from "../Titulo/Titulo";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoriaId} = useParams()
  useEffect(() => {

    if (categoriaId) {
      gFetch()
      .then((resp) => setProducts(resp.filter(product => product.categoria === categoriaId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      
    } else {
      gFetch()
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      
    }
   
  }, [categoriaId]);

  console.log(categoriaId)

  return (
    <>
      <h2>{saludo}</h2>
      <Titulo
        titulo={"Preparados magistrales"}
        subtitulo={"Linea 100% organica de maquillaje"}
      />
      <Formulario />
      
      

      {loading ? (
        <h2>Cargando productos ...</h2>
      ) :  (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ItemList products={products}/>
        </div>
        
        
      )}
      
    </>
  );
};

export default ItemListContainer;
