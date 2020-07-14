import React from "react";
import Pizza from "../Interfaces/Pizza";

class PizzaContainer extends React.Component {
  state = {
    tamaño: 0,
    invitados: 0,
    porcion: 0,
  };

  handleClear = () => {
    this.setState({ tamaño: 0, invitados: 0, porcion: 0 });
  };
  handleChange = (e, key) => {
    const value = e.target.value;
    this.setState({ ...this.state, [key]: value });
  };

  render() {
    const { tamaño, invitados, porcion } = this.state;
    const pizzas = Math.ceil((invitados * porcion) / tamaño);
    return (
      <div className="pizza-container">
        <Pizza
          values={this.state}
          pizzas={pizzas}
          handleInputChange={this.handleChange}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default PizzaContainer;
