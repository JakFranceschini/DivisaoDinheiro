import React from "react";
import "./ContainerResultados.css";

function ContainerResultados() {
  return (
    <div id="containerResultados">
      <div className="containerGastos">
        <h2>Gastos</h2>
        <h3>Total destinado para gastos</h3>
        <label id="labelGastos"></label>
      </div>

      <div className="containerInvestimentos">
        <h2>Investimentos</h2>
        <h3>Total destinado para Investimentos</h3>
        <label id="labelInvestimentos"></label>
      </div>

      <div className="containerReserva">
        <h2>Reserva de emergência</h2>
        <h3>Total destinado para reserva de emergência</h3>
        <label id="labelReserva"></label>
      </div>
    </div>
  );
}

export default ContainerResultados;
