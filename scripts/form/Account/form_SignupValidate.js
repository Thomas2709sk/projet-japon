import FormGenerate from '../form_Manager.js';
const formSignup = new FormGenerate('form_signup');
    
    
    formSignup.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    
        formSignup.affAnswers();
    });