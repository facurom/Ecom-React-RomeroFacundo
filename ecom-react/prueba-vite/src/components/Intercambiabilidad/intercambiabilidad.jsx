import React from "react";
const ButtonCart = () => {
  return (
    <>
      <Link to="/cart">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir a cart")}
        >
          Ir al Cart o Terminar compra
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir al home")}
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

const ItemCount = ({ handleInter }) => {
  return (
    <button className="btn btn-outline-success" onClick={handleInter}>
      Agregar Al carrito
    </button>
  );
};
const intercambiabilidad = () => {
  const [inputType, setInputType] = useState("button");

  const onAdd = () => {
    setInputType("input");
  };
  return (
    <div>
      <h2>Item Description</h2>
      {/* mas cosas */}
      {inputType === "button" ? (
        <ItemCount handleInter={onAdd} />
      ) : (
        <ButtonCart />
      )}
      {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
    </div>
  );
};

export default intercambiabilidad;
