import React from "react";
import "./ContainerPorcentagens.css";

function ContainerPorcentagens() {
  return (
    <div id="containerPorcentagens">
      <div className="containerPorcentagemGastos">
        <h2>Gastos</h2>
        <h3>Digite a porcentagem para gastos</h3>
        <input id="inputPorecentagemGastos" type="number" />
      </div>

      <div className="containerPorcentagemInvestimentos">
        <h2>Investimentos</h2>
        <h3>Digite a porcentagem para Investimentos</h3>
        <input id="inputPorecentagemInvestimentos" type="number" />
      </div>

      <div className="containerPorcentagemReserva">
        <h2>Reserva de emergência</h2>
        <h3>Digite a porcentagem para reserva de emergência</h3>
        <input id="inputPorecentagemReserva" type="number" />
      </div>
    </div>
  );
}

export default ContainerPorcentagens;
