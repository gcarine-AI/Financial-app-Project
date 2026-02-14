/*
OBJETIVO:
Salvar e recuperar as transações no localStorage.

PENSAMENTO:

1) Precisamos definir uma chave fixa para armazenar os dados.
2) Quando salvar:
   - Converter array de objetos para JSON.
   - Usar localStorage.setItem().
3) Quando carregar:
   - Buscar com localStorage.getItem().
   - Se existir, converter de volta com JSON.parse().
   - Se não existir, retornar array vazio.

PERGUNTAS PARA VOCÊ:
- O que acontece se não existir nada salvo?
- Por que precisamos usar JSON.stringify?
- O que localStorage realmente armazena?

DICA:
localStorage só aceita strings.
*/

const CHAVE_TRANSACOES = "ChaveTransacoes"

export function save (transacoes) {
   if (!Array.isArray(transacoes)) {
      throw new Error ("Espera-se um array de transações")
   }

   const convertJson = JSON.stringify(transacoes)
   localStorage.setItem(CHAVE_TRANSACOES, convertJson)
}   
   

export function read () {
   const lerTransacoes = (localStorage.getItem(CHAVE_TRANSACOES))
   if (lerTransacoes !== null) {
      return JSON.parse(lerTransacoes)
   } else { 
      return []
   }
} 


