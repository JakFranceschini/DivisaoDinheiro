import React from "react";
import "./PaginaHome.css";
import IconeTopBar from "../img/iconeTopBar.png";
import IconeDarkMode from "../img/iconeDarkMode.png";
import { useEffect } from "react";

function PaginaHome() {

    useEffect(() => {
      let botaoCalcular = document.getElementById('botaoCalcular');
      let containerPorcentagens = document.getElementById('containerPorcentagens');
      containerPorcentagens.style.display = 'none';
      let containerResultados = document.getElementById('containerResultados');
      containerResultados.style.display = 'none';
      let botaoVerResultados = document.getElementById('botaoVerResultados');
      botaoVerResultados.style.display = 'none';
      let botaoZerar = document.getElementById('botaoZerar');
      botaoZerar.style.display = 'none';

      botaoCalcular.addEventListener('click', function(){
        botaoCalcular.style.display = 'none';
        containerPorcentagens.style.display = 'flex';
        botaoVerResultados.style.display = 'flex';
        botaoVerResultados.style.alignItems = 'center';
        botaoVerResultados.style.justifyContent = 'center';
        
        const tituloH2 = document.getElementById('tituloH2');
        tituloH2.innerHTML = 'Total liquido';
        tituloH2.style.display = 'flex';
        const tituloH3 = document.getElementById('tituloH3');
        tituloH3.innerHTML = 'Total liquido do mês';
        tituloH3.style.display = 'flex';

        const inputReceita = parseInt(document.getElementById('inputReceita').value);
        const inputDespesa = parseInt(document.getElementById('inputDespesa').value);
        const resultado = inputReceita - inputDespesa;

        const labelResultado = document.getElementById('labelResultado');
        labelResultado.innerHTML = resultado;
        labelResultado.style.display = 'flex';
        labelResultado.style.alignItems = 'center';
        labelResultado.style.justifyContent = 'center';
      });

      botaoVerResultados.addEventListener('click', function(){
        botaoVerResultados.style.display = 'none';
        containerResultados.style.display = 'flex';
        botaoZerar.style.display = 'flex';
        botaoZerar.style.alignItems = 'center';
        botaoZerar.style.justifyContent = 'center';

        const inputReceita = parseInt(document.getElementById('inputReceita').value);
        const inputDespesa = parseInt(document.getElementById('inputDespesa').value);
        const resultado = inputReceita - inputDespesa;

        const inputPorecentagemGastos = parseInt(document.getElementById('inputPorecentagemGastos').value);
        const labelGastos = document.getElementById('labelGastos');
        const resultadoGastos = resultado * inputPorecentagemGastos / 100;
        labelGastos.innerHTML = resultadoGastos;

        const inputPorecentagemInvestimentos = parseInt(document.getElementById('inputPorecentagemInvestimentos').value);
        const labelInvestimentos = document.getElementById('labelInvestimentos');
        const resultadoInvestimentos = resultado * inputPorecentagemInvestimentos / 100;
        labelInvestimentos.innerHTML = resultadoInvestimentos;

        const inputPorecentagemReserva = parseInt(document.getElementById('inputPorecentagemReserva').value);
        const labelReserva = document.getElementById('labelReserva');
        const resultadoReserva = resultado * inputPorecentagemReserva / 100;
        labelReserva.innerHTML = resultadoReserva;
      });

      botaoZerar.addEventListener('click', function(){
        botaoZerar.style.display = 'none';
        containerPorcentagens.style.display = 'none';
        containerResultados.style.display = 'none';
        botaoCalcular.style.display = 'flex';
        botaoCalcular.style.alignItems = 'center';
        botaoCalcular.style.justifyContent = 'center';
        
        document.getElementById('tituloH2').style.display = 'none';
        document.getElementById('tituloH3').style.display = 'none';
        document.getElementById('labelResultado').style.display = 'none';
        document.getElementById('inputReceita').value = '';
        document.getElementById('inputDespesa').value = '';
        document.getElementById('inputPorecentagemGastos').value = '';
        document.getElementById('inputPorecentagemInvestimentos').value = '';
        document.getElementById('inputPorecentagemReserva').value = '';
      });
    });

    return (
      <div className="paginaHome">
        <nav>
          <div className="containerIconeTitulo">
            <img className="iconeTopBar" src={IconeTopBar}/>
            <h1>Minha divisão de dinheiro</h1>
          </div>
          <button id="botaoDarkMode"><img src={IconeDarkMode}/></button>
        </nav>

        <section className="sectionPrincipal">
          <div className="containerCalculo">
            <div className="containerReceita">
              <h2>Total recebido</h2>
              <h3>Digite o total recebido no mês</h3>
              <input id="inputReceita" type="number"/>
            </div>
            <div id="containerTotal">
              <button id="botaoCalcular">Calcular</button>
              <h2 id="tituloH2"></h2>
              <h3 id="tituloH3"></h3>
              <label id="labelResultado"></label>
            </div>
            <div className="containerDespesa">
              <h2>Total de contas</h2>
              <h3>Digite o total das contas do mês</h3>
              <input id="inputDespesa" type="number"/>
            </div>
          </div>

          <div id="containerPorcentagens">
            <div className="containerPorcentagemGastos">
              <h2>Gastos</h2>
              <h3>Digite a porcentagem para gastos</h3>
              <input id="inputPorecentagemGastos" type="number"/>
            </div>
            <div className="containerPorcentagemInvestimentos">
              <h2>Investimentos</h2>
              <h3>Digite a porcentagem para Investimentos</h3>
              <input id="inputPorecentagemInvestimentos" type="number"/>
            </div>
            <div className="containerPorcentagemReserva">
              <h2>Reserva de emergência</h2>
              <h3>Digite a porcentagem para reserva de emergência</h3>
              <input id="inputPorecentagemReserva" type="number"/>
            </div>
          </div>

          <button id="botaoVerResultados">Ver Resultados</button>

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
          <button id="botaoZerar">Novo calculo</button>
        </section>
      </div>
    );
  }
  
  export default PaginaHome;