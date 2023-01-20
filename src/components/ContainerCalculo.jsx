import React from "react";
import "./ContainerCalculo.css";

function ContainerCalculo() {
  return (
    <div className="containerCalculo">
      <div id="containerReceita">
        <h2>Total receita</h2>
        <h3>Digite o total da receita recebida no mês</h3>
        <input id="inputReceita" type="number" />
      </div>

      <div id="containerTotal">
        <h2 id="tituloH2"></h2>
        <h3 id="tituloH3"></h3>
        <label id="labelResultado"></label>
      </div>

      <div id="containerDespesa">
        <h2>Total de despesas</h2>
        <h3>Digite o total das despesas do mês</h3>
        <input id="inputDespesa" type="number" />
      </div>
    </div>
  );
}

export default ContainerCalculo;
