import { useState } from "react";

export const ItemCount = () => {
    const [contador, setearContador] = useState(0);
    const [booleano, setBooleano] = useState(true);
    const handleCount = () => {
      setearContador(contador + 1);
    };
    const handleBool = () => setBooleano(!booleano);
    return (
      <center>
        {contador}
        
        <button className="btn btn-outline-primary" onClick={handleCount}>
          +
        </button>
        
        <button className="btn btn-outline-primary" onClick={handleCount}>-</button>
        <button className="btn btn-outline-primary" onClick={handleCount}>Agregar al carrito</button>
        <br></br> 
      </center>
      
    );
  };