import Formulario from "../Formulario/formulario"
import Titulo from "../Titulo/Titulo"

const HomeContainer = ({saludo, saludar}) => {
  return (
    <div>
        <h2>{saludo}</h2>
        <Titulo titulo={'titulo de Home'} subtitulo={'subtitulo de Home'}/>
        <Formulario/>
        <button onClick={saludar}>Presione aqui</button>
    </div>
  )
}

export default HomeContainer