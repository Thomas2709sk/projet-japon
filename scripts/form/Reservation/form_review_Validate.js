import FormGenerate from '../form_Manager.js';

// Créer formulaire de review
const formReview = new FormGenerate('form_review');


formReview.form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    formReview.affAnswers();
});
