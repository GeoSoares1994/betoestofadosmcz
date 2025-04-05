const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")



function MostrarFormulario(){
    
    formulario.style.left = "40%"
    formulario.style.transform = "translateX()-50%"
    mascara.style.visibility = "visible"

}

function TirarFormulario(){
    formulario.style.left = "-220px"
    formulario.style.transform = "translateX()0"
    mascara.style.visibility = "hidden"
}


