var busq = document.forms["mySearch"]["inputSearch"];

var errorSearch = document.getElementById("errorSearch");

busq.addEventListener('change', busqVerify, false);

function search(){
    if(busq.value.length<2){
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Introduzca mas criterios para la busqueda";
        busq.focus();
        return false;
    }
}