var emailR = document.forms["myFormR"]["inputEmailR"];
var pasR = document.forms["myFormR"]["inputPasswordR"];

var errorEmailR = document.getElementById('errorEmailR');
var errorPasswordR = document.getElementById('errorPasswordR');

emailR.addEventListener('change', emailRVerify, false);
pasR.addEventListener('change', pasRVerify, false);


function loginValidate(){
    let acumerror= 0;
    if (emailR.value == ""){
        inputEmailR.classList.add("is-invalid");
        document.getElementById("errorEmailR").textContent = "Es campo es obligatorio";
        acumerror++;
    }else if(!validar_email(inputEmailR.value)){
		inputEmailR.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "El email no cumple el formato";
        acumerror++;
    }
    // validate password
    if(pasR.value == ""){
        inputPasswordR.classList.add("is-invalid");
        document.getElementById("errorPasswordR").textContent = "Es campo es obligatorio";
        acumerror++;
    }
    if(acumerror == 0){
        return true;
    }else{
        return false;
    }
}
function validar_email(emailR) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(emailR) ? true : false;
}