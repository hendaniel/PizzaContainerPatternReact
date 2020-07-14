import React from "react";
import pizzaGif from "../assets/pizza.gif";

const Pizza = ({ values, handleInputChange, handleClear, pizzas }) => (
  <div>
    <div className="pizza-form">
      <div className="item">
        <label>Tamaño de la pizza (porciones):</label>
        <input
          value={values["tamaño"]}
          onChange={(e) => handleInputChange(e, "tamaño")}
        ></input>
      </div>

      <div className="item">
        <label>Cantidad de invitados:</label>
        <input
          value={values["invitados"]}
          onChange={(e) => handleInputChange(e, "invitados")}
        ></input>
      </div>

      <div className="item">
        <label>Porciones por invitado:</label>
        <input
          value={values["porcion"]}
          onChange={(e) => handleInputChange(e, "porcion")}
        ></input>
      </div>

      <p style={{ marginRight: "15px" }}>
        La cantidad de pizzas que debes comprar es: {pizzas || 0}
      </p>
      <button onClick={handleClear}>Borrar</button>
    </div>
  </div>
);

export default Pizza;
