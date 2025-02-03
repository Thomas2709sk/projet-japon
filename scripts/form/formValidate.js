
import FormGenerate from './formmanager.js';

// // Creer form

// Créer une instance de FormHandler pour le formulaire de réservation
const formReservation = new FormGenerate('form_reservation');

// Ajouter un écouteur d'événements pour gérer la soumission
formReservation.form.addEventListener('submit', (event) => {
    // empeche l'envoi
    event.preventDefault(); 
    
    const hiddenPriceInput = document.getElementById('hiddenPrice');
    const priceText = document.getElementById('price'); 
    // Mets à jour la valeur du hidden
    hiddenPriceInput.value = priceText.textContent; 


    // Affiche les réponses du formulaire dans une alerte
    formReservation.affAnswers();
});




// Créer une instance de FormHandler pour le formulaire de review
const formReview = new FormGenerate('form_review');


formReview.form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    formReview.affAnswers();
});
