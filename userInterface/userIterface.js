/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/

import { getTransacoes, addTransacao, removeTransacao } from "../state/state.js"
import { calcularSaldo, calcularReceitas, calcularDespesas } from "../Operations/transactions.js";





   const CONTAINER = document.querySelector(".transacoes_historico");
   const balancoTotal = document.querySelector("#valor_balanco")
   const rendaTotal = document.querySelector("#valor_renda")
   const despesasTotal = document.querySelector("#valor_despesas")


   const form = document.querySelector(".form-container")
   const descricaoInput = document.querySelector("#descricao")
   const valorInput = document.querySelector("#quantidade")
   const tipoSelect = document.querySelector("#tipo-transacao")

   const botaoAdicionar = document.querySelector(".adiciona-historia");



   export function renderLista() {

    const transacoes = getTransacoes();
     
    CONTAINER.innerHTML = "";

    transacoes.forEach(transac => {
        const linha = document.createElement("div")
        linha.classList.add("linha-transacao")
        linha.classList.add(transac.tipo === "receita" ? "receita" : "despesa");

        linha.innerHTML = ` 
            <span>${transac.descricao}</span>
            <span>${transac.tipo}</span>
            <span>${transac.data}</span>
            <span>${formatarMoeda(transac.valor)}</span>
        `;

        const deleteButton = document.createElement("button");
         deleteButton.classList.add("Delete");
         deleteButton.innerText = "x";
         deleteButton.addEventListener("click", function() {
            if(confirm("Deseja realmente remover esta transação?")) {
            removeTransacao(transac.id);
            renderLista();
            } 
        });

        linha.appendChild(deleteButton);
        CONTAINER.appendChild(linha)

    });
    actualizarCards(transacoes)
   }

   export function actualizarCards (transacoes) {
    balancoTotal.innerText = formatarMoeda(calcularSaldo(transacoes))
    rendaTotal.innerText = formatarMoeda(calcularReceitas(transacoes))
    despesasTotal.innerText = formatarMoeda(calcularDespesas(transacoes))
}
   

   export function configurarFormulario() {
      botaoAdicionar.addEventListener("click", adicionarTransacaoFormulario)
      form.addEventListener("submit", event => {
        event.preventDefault()
     
    });
   }
      function adicionarTransacaoFormulario() {

        const descricao = descricaoInput.value.trim();
        const valor = parseFloat(valorInput.value);
        const tipo = tipoSelect.value;

        if (!descricao || isNaN(valor) || valor < 0) {
            return alert("Preencha todos os campos corretamente!")
        }

        const novaTransacao = {
            id: Date.now(),
            descricao,
            valor,
            tipo,
            data: new Date().toLocaleDateString("pt-PT", { day: '2-digit', month: '2-digit', year: 'numeric' })
        };


        addTransacao(novaTransacao)
        limparFormulario()
        renderLista()
    }


function limparFormulario() {
    descricaoInput.value = "";
    valorInput.value = "";
    tipoSelect.value = "receita";
}




function formatarMoeda(valor) {
    return valor.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
}

  
    

        
 




