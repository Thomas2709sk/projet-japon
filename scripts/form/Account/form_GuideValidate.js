import FormGenerate from '../form_Manager.js';
const formGuide = new FormGenerate('form_guide');
    
    
    formGuide.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    
        formGuide.affAnswers();
    });