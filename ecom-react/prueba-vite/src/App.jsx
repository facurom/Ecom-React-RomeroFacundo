import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomeContainer from './components/HomeContainer/HomeContainer'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let saludo = 'Hola, soy HomeContainer'
  let saludar = () => alert ('Bienvenido a nuestra web')
  return (
    <div>
      <HomeContainer saludo={saludo} saludar={saludar} />
      
    </div>
  )
}

export default App
