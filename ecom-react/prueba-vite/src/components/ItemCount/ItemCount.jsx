import { useState } from "react";

export const ItemCount = ( { stock = 5 } ) => {
    const [contador, setearContador] = useState(0);
    const [booleano, setBooleano] = useState(true);
    const handleCount = () => {
      console.log(contador)
      if (count < stock){
        
        setearContador(contador + 1)
      }
    };
    const handleBool = () => setBooleano(!booleano);
    return (
      <center className="mt-5">
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