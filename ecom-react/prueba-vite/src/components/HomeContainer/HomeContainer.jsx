import { useEffect, useState } from "react"
import { gFetch } from "../../helpers/gFetch"
import Formulario from "../Formulario/formulario"
import Titulo from "../Titulo/Titulo"



const ItemCount = () =>{
  const [contador, setearContador] = useState (0)
  const [booleano, setBooleano] = useState (true)
  
  
  const handleCount = () =>{
    setearContador(contador + 1)
  }
  const hanldeBool = () => setBooleano (!booleano)
  return (
    <center>
        {contador}
        
        <button className="btn btn-outline-primary" onClick={handleCount}>+</button>
        <br></br>
        {/*<button className="btn btn-outline-primary" onClick={hanldeBool}> Ejecutar Booleano</button>*/}
    </center>
  )

}
const HomeContainer = ({saludo}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading ] = useState(true)
  useEffect(()=>{
    gFetch()
    .then(resp=>setProducts(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])
  
  
  useEffect(()=>{
    //console.log('cambio de booleano -3')
  
  }, [booleano, contador, saludo])
  
  return(
    <> 
      <h2>{saludo}</h2>
      <Titulo titulo={'Preparados magistrales'} subtitulo={'Linea 100% organica de maquillaje'}/>
      <Formulario/>
      
    
      <ItemCount/>
    </>
  )
  
  
}

export default HomeContainer