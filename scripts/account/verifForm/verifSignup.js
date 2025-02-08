// Verifications input Signup

const inputPseudo = document.getElementById("InputPseudo");
const inputMail = document.getElementById("InputEmail");
const inputPassword = document.getElementById("InputPassword");
const inputValidatePassword = document.getElementById("ValidateInputPassword");
const btnValidation = document.getElementById("btn-validate-signup");

inputPseudo.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm(){
  const pseudoOk =  validateRequired(inputPseudo);
  const mailOk =  validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmPassword(inputPassword, inputValidatePassword)



    if(pseudoOk && mailOk && passwordOk && passwordConfirmOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateConfirmPassword(inputPwd, inputConfirmPwd ){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){
    // Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
    // Regex
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(mailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}