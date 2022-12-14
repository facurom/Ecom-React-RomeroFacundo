import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
<components />





function App() {
  const [count, setCount] = useState(0)
  let saludo = 'NaturePharma Home'
  let saludar = () => alert ('Bienvenido a nuestra web')
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo}saludar={saludar} />
      
    </div>
  )
}

export default App
