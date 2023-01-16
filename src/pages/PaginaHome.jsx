import React from "react";
import "./PaginaHome.css";
import IconeTopBar from "../img/iconeTopBar.png";
import IconeDarkMode from "../img/iconeDarkMode.png";
import { useEffect } from "react";

function PaginaHome() {


    useEffect(() => {
      let botaoCalcular = document.getElementById('botaoCalcular');

      botaoCalcular.addEventListener('click', function(){
        botaoCalcular.style.display = 'none';

        document.getElementById('tituloH2').innerHTML = 'Total liquido';
        document.getElementById('tituloH3').innerHTML = 'Total liquido do mês';

        const inputReceita = parseInt(document.getElementById('inputReceita').value);
        const inputDespesa = parseInt(document.getElementById('inputDespesa').value);
        const resultado = inputReceita - inputDespesa;

        const labelResultado = document.getElementById('labelResultado');
        labelResultado.innerHTML = resultado;
        labelResultado.style.display = 'flex';
        labelResultado.style.alignItems = 'center';
        labelResultado.style.justifyContent = 'center';
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
        </section>
      </div>
    );
  }
  
  export default PaginaHome;