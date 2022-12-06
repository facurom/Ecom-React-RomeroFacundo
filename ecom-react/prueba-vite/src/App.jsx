import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomeContainer from './components/HomeContainer/HomeContainer'
import Navbar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  let saludo = 'NaturePharma Home'
  let saludar = () => alert ('Bienvenido a nuestra web')
  return (
    <div>
      <Navbar />
      <HomeContainer saludo={saludo} saludar={saludar} />
      
    </div>
  )
}

export default App
