const textarea = document.getElementById("textarea");
const amountDigits = document.getElementById("amountDigits");
const containerTextarea = document.querySelector(".container-textarea");

textarea.addEventListener("input", ()=>{
    let resultado = textarea.value.length
    if (resultado >= 250) {
        containerTextarea.className = "container-textarea error"
    } else {
        containerTextarea.className = "container-textarea"
    }
    amountDigits.textContent = resultado;
});