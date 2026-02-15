import { configurarFormulario, renderLista } from "./userInterface/userIterface.js"

configurarFormulario()
renderLista()

const data = document.querySelector(".calendario")

data.innerText = new Date().toLocaleDateString() 




