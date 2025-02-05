import FormGenerate from './form_Manager.js';
const formContact = new FormGenerate('form_contact');
    
    
    formContact.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    
        formContact.affAnswers();
    });