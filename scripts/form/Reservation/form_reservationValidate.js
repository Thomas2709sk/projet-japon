
import FormGenerate from '../form_Manager.js';


// Créer formulaire de réservation
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





