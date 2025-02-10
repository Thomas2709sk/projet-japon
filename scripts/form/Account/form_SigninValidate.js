import FormGenerate from '../form_Manager.js';
const formSignin = new FormGenerate('form_signin');
    
    
    formSignin.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    
        formSignin.affAnswers();
    });