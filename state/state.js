/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
- O que significa separar responsabilidade?

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/

import {save, read} from "../storage/storage.js"

let listaTransacoes = read();

function perservar () {
   return save(listaTransacoes)
};

export function getTransacoes () {
   return [...listaTransacoes]
};

export function addTransacao (novaTransacao) {
   if (!novaTransacao || typeof novaTransacao !== "object") {
    throw new Error("Transação inválida")
}
   listaTransacoes.push(novaTransacao)
   perservar()

};

export function removeTransacao (id) {
   listaTransacoes = listaTransacoes.filter(transac => transac.id !== id)
   perservar()

};

export function updateTransacao (id, dadosAtualizados) {
    listaTransacoes = listaTransacoes.map(transac =>
        transac.id === id ? { ...transac, ...dadosAtualizados } : transac
    )
    perservar()
}


