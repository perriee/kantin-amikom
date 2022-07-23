var nim = document.form['form']['nim'];
var password = document.forms['form']['password'];

var nim_error = document.getElementById('Nim_error');
var pass_error = document.getElementById('pass_error');

nim.addEventListener('textInput', nim_Verifty);
password.addEventListener('textInput', pass_Verifty);

function validated(){

    if (nim.value.length < 8){
        nim.style.border = "1px solid red";
        nim_error.style.display ="block";
        nim.foucus();
        return false;
    }
    if (password.value.length < 8){
        password.style.border = "1px solid red";
        pas_error.style.display ="block";
        password.foucus();
        return false;
    }
}
function nim_Verifty(){
    if(nim.value.length >=8){
        nim.style.border = "1px solid silver";
        nim_error.style.display = "none";
        return true;
    }
}
    function pass_Verifty(){
        if(pass.value.length >=8){
            pass.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
}