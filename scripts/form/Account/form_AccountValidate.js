import FormGenerate from '../form_Manager.js';
const formAccount = new FormGenerate('form_account');
    
    
    formAccount.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    
        formAccount.affAnswers();
    });