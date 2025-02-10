
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici appeler l'API pour verifier crédentials en BDD

    if(inputEmail.value == "admin@mail.com" && inputPassword.value == "admin"){
        alert("Vous êtes connecté");

        // Rcuperer le vrai token quand BDD ok 
        const token = "tokentestadmin";
        setToken(token);
        
        // Placer token en cookie
        setCookie("role", "admin", 7);

        window.location.replace("/");
    }
    else{
        inputEmail.classList.add('is-invalid');
        inputPassword.classList.add("is-invalid");
    }
}


