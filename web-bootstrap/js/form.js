// variables de seleccion de inputs
var email = document.forms["myForm"]["inputEmail"];
var emailR = document.forms["myFormR"]["inputEmailR"];
var pas = document.forms["myForm"]["inputPassword"];
var pasOk = document.forms["myForm"]["inputPasswordOk"];
var pasR = document.forms["myFormR"]["inputPasswordR"];
var namee = document.forms["myForm"]["inputName"];
var tlf = document.forms["myForm"]["inputTlf"];
var city = document.forms["myForm"]["inputCity"];
var pro = document.forms["myForm"]["inputProvince"];
var zip = document.forms["myForm"]["inputZip"];
var check = document.forms["myForm"]["gridCheck"];

// errores, seleccion en variables
var errorEmail = document.getElementById('errorEmail');
var errorEmailR = document.getElementById('errorEmailR');
var errorPassword = document.getElementById('errorPassword');
var errorPasswordOk = document.getElementById('errorPasswordOk');
var errorPasswordR = document.getElementById('errorPasswordR');
var errorName = document.getElementById('errorName');
var errorTlf = document.getElementById('errorTlf');
var errorCity = document.getElementById('errorCity');
var errorProvince = document.getElementById('errorProvince');
var errorZip = document.getElementById('errorZip');
var errorCheck = document.getElementById('errorCheck');

// seleccion de events.listener
namee.addEventListener('change', nameVerify, false);
email.addEventListener('change', emailVerify, false);
emailR.addEventListener('change', emailRVerify, false);
pas.addEventListener('change', pasVerify, false);
pasOk.addEventListener('change', pasOkVerify, false);
pasR.addEventListener('change', pasRVerify, false);
tlf.addEventListener('change', tlfVerify, false);
city.addEventListener('change', cityVerify, false);
pro.addEventListener('change', proVerify, false);
zip.addEventListener('change', zipVerify, false);
check.addEventListener('change', checkVerify, false);

// login funcion
function loginValidate(){
    
    if (emailR.value == ""){
        inputEmailR.classList.add("is-invalid");
        document.getElementById("errorEmailR").textContent = "Es campo es obligatorio";
        return false;
    }else if(!validar_email(inputEmailR.value)){
		inputEmailR.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "El email no cumple el formato";
        return false;
    }
    // validate password
    if(pasR.value == ""){
        inputPasswordR.classList.add("is-invalid");
        document.getElementById("errorPasswordR").textContent = "Es campo es obligatorio";
        return false;
    }
}
// validacion funcion
function registerValidate(){
    // validate email
    if (email.value == ""){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        email.focus();
        return false;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no cumple el formato";
        email.focus();
        return false;
    }
    // validate password
    if(pas.value == ""){
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
        pas.focus();
        return false;
    }else if(pas.value.length<6){
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Debe contener mas 6 o mas caracteres";
        pas.focus();
        return false;
    }
    // validate password repeat
    if(pasOk.value != pas.value){
        inputPasswordOk.classList.add("is-invalid");
        document.getElementById("errorPasswordOk").textContent = "La contraseña debe coincidir";
        pasOk.focus();
        return false;
    }
    // validate name
    if(namee.value == ""){
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Es campo es obligatorio";
        return false;
    }
    // validate telefono
    let telefono = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
    if(tlf.value == ""){
        inputTlf.classList.add("is-invalid");
        document.getElementById("errorTlf").textContent = "Es campo es obligatorio";
        return false;
    }else if(!(telefono.test(tlf.value))){
        inputTlf.classList.add("is-invalid");
        document.getElementById("errorTlf").textContent = "El numero de telefono es incorrecto";
        return false;
    }
    // validate province
    if(pro.value == ""){
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Es campo es obligatorio";
        return false;
    }
    // validate zip
    if(zip.value == ""){
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "El campo es obligatorio";
        return false;
    }
    else if(!validar_zip(inputZip.value)){
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "El codigo postal no es correcto";
        return false;
    }
    // Validate terminos y condiciones
    if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		return false;
    }

}
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
function validar_zip(zip) {
	var regex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
	return regex.test(zip) ? true : false;
}