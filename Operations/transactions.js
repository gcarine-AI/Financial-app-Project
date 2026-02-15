/*
OBJETIVO:
Calcular saldo total, total de receitas e total de despesas.


PENSAMENTO:

1) O saldo começa em 0.
2) Para cada transação:
   - Se for receita, soma.
   - Se for despesa, subtrai.
3) Para calcular totais separados:
   - Filtrar por tipo.
   - Somar valores.

DICA IMPORTANTE:
Use reduce().

Pergunta:
- O que é o acumulador?
- Qual deve ser o valor inicial?

Exemplo mental:
[100, -50, 200]
Resultado esperado: 250

Não escreva loops tradicionais.
*/

// Calcula saldo total

export function calcularSaldo(transacoes) {
    return transacoes.reduce((acumulador, transac) => {
        if (transac.tipo === "receita"){
             return acumulador + transac.valor
        } else {
            return acumulador - transac.valor
        } 
    }, 0)
}

export function calcularReceitas(transacoes) {
    return transacoes
        .filter(transac => transac.tipo === "receita")
        .reduce((acumulador, transac) => acumulador + transac.valor, 0)
}

export function calcularDespesas(transacoes) {
    return transacoes
        .filter(transac => transac.tipo === "despesa")
        .reduce((acumulador, transac) => acumulador + transac.valor, 0)
}


