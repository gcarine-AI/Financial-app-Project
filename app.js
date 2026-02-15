import { configurarFormulario, renderLista } from "./userInterface/userIterface.js"

import { iniciarCategorias, getCategoriaSelecionada } from "./categorias/categorias.js"

configurarFormulario();
renderLista();

iniciarCategorias();

const data = document.querySelector(".calendario")

data.innerText = new Date().toLocaleDateString() 




