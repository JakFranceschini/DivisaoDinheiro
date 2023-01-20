import React from "react";
import "./PaginaHome.css";
import TopBar from "../components/TopBar.jsx";
import { useEffect } from "react";
import ContainerCalculo from "../components/ContainerCalculo";
import ContainerPorcentagens from "../components/ContainerPorcentagens";
import ContainerResultados from "../components/ContainerResultados";

function PaginaHome() {
  useEffect(() => {
    let botaoCalcular = document.getElementById("botaoCalcular");
    let containerPorcentagens = document.getElementById("containerPorcentagens");
    containerPorcentagens.style.display = "none";
    let containerResultados = document.getElementById("containerResultados");
    containerResultados.style.display = "none";
    let botaoVerResultados = document.getElementById("botaoVerResultados");
    botaoVerResultados.style.display = "none";
    let botaoZerar = document.getElementById("botaoZerar");
    botaoZerar.style.display = "none";
    let containerTotal = document.getElementById("containerTotal");
    containerTotal.style.display = "none";

    botaoCalcular.addEventListener("click", function () {
      botaoCalcular.style.display = "none";
      containerPorcentagens.style.display = "flex";
      botaoVerResultados.style.display = "flex";
      botaoVerResultados.style.alignItems = "center";
      botaoVerResultados.style.justifyContent = "center";

      const containerReceita = document.getElementById("containerReceita");
      containerReceita.style.width = "420px";
      containerTotal.style.display = "flex";
      const containerDespesa = document.getElementById("containerDespesa");
      containerDespesa.style.width = "420px";

      const tituloH2 = document.getElementById("tituloH2");
      tituloH2.innerHTML = "Total liquido";
      tituloH2.style.display = "flex";
      const tituloH3 = document.getElementById("tituloH3");
      tituloH3.innerHTML = "Total liquido do mês";
      tituloH3.style.display = "flex";

      const inputReceita = parseFloat(document.getElementById("inputReceita").value);
      const inputDespesa = parseFloat(document.getElementById("inputDespesa").value);
      const resultado = inputReceita - inputDespesa;

      const labelResultado = document.getElementById("labelResultado");
      labelResultado.innerHTML = resultado.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
      labelResultado.style.display = "flex";
      labelResultado.style.alignItems = "center";
      labelResultado.style.justifyContent = "center";
    });

    botaoVerResultados.addEventListener("click", function () {
      botaoVerResultados.style.display = "none";
      containerResultados.style.display = "flex";
      botaoZerar.style.display = "flex";
      botaoZerar.style.alignItems = "center";
      botaoZerar.style.justifyContent = "center";

      const inputReceita = parseFloat(document.getElementById("inputReceita").value);
      const inputDespesa = parseFloat(document.getElementById("inputDespesa").value);
      const resultado = inputReceita - inputDespesa;

      const inputPorecentagemGastos = parseInt(document.getElementById("inputPorecentagemGastos").value);
      const labelGastos = document.getElementById("labelGastos");
      const resultadoGastos = (resultado * inputPorecentagemGastos) / 100;
      labelGastos.innerHTML = resultadoGastos.toLocaleString("pt-br", {style: "currency", currency: "BRL",});

      const inputPorecentagemInvestimentos = parseInt(document.getElementById("inputPorecentagemInvestimentos").value);
      const labelInvestimentos = document.getElementById("labelInvestimentos");
      const resultadoInvestimentos = (resultado * inputPorecentagemInvestimentos) / 100;
      labelInvestimentos.innerHTML = resultadoInvestimentos.toLocaleString("pt-br",{ style: "currency", currency: "BRL"});

      const inputPorecentagemReserva = parseInt(document.getElementById("inputPorecentagemReserva").value);
      const labelReserva = document.getElementById("labelReserva");
      const resultadoReserva = (resultado * inputPorecentagemReserva) / 100;
      labelReserva.innerHTML = resultadoReserva.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    });

    botaoZerar.addEventListener("click", function () {
      botaoZerar.style.display = "none";
      containerPorcentagens.style.display = "none";
      containerResultados.style.display = "none";
      botaoCalcular.style.display = "flex";
      botaoCalcular.style.alignItems = "center";
      botaoCalcular.style.justifyContent = "center";

      const containerReceita = document.getElementById("containerReceita");
      containerReceita.style.width = "48%";
      containerTotal.style.display = "none";
      const containerDespesa = document.getElementById("containerDespesa");
      containerDespesa.style.width = "48%";

      document.getElementById("tituloH2").style.display = "none";
      document.getElementById("tituloH3").style.display = "none";
      document.getElementById("labelResultado").style.display = "none";
      document.getElementById("inputReceita").value = "";
      document.getElementById("inputDespesa").value = "";
      document.getElementById("inputPorecentagemGastos").value = "";
      document.getElementById("inputPorecentagemInvestimentos").value = "";
      document.getElementById("inputPorecentagemReserva").value = "";
    });
  });

  return (
    <div className="paginaHome">
      <TopBar />

      <section className="sectionPrincipal">
        <ContainerCalculo />
        <button id="botaoCalcular">Calcular</button>

        <ContainerPorcentagens />
        <button id="botaoVerResultados">Ver Resultados</button>

        <ContainerResultados />
        <button id="botaoZerar">Novo calculo</button>
      </section>
    </div>
  );
}

export default PaginaHome;
