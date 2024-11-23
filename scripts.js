
const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao() {
   form.style.left = "50%"
   form.style.transform = "translateX (-50%)"
   mascara.style.visibility = "visible"


}
function sair() {
   mascara.style.visibility = "hidden"
   form.style.left = "-11%"
   form.style.transform = "translateX (0)"
}