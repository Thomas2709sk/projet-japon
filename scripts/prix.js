// Creation de const pour nb de personne et prix grace a l'Id
const selectPeople = document.getElementById('number');
const pricePeople = document.getElementById('price');

// Pour envoyer le prix dans FormData - formvalidate.js
const hiddenPriceInput = document.getElementById('hiddenPrice');

// Fonction pour ajuster le prix
function updatePrice() {

    // Nombre de personnes choisis
    const numberPeople = parseInt(selectPeople.value, 10);

    // Prix pour 1 personne
    const priceBase = 150;

    // Calcul pour plus de personnes
    const priceTotal = priceBase * numberPeople;

    // Texte du prix
    pricePeople.textContent = priceTotal + "€";

     // Mise à jour du prix dans le champ caché
    if (hiddenPriceInput) {
        hiddenPriceInput.value = priceTotal;  // Mise à jour de la valeur du champ caché
    }
}

// modifie le perix quand nombre personne change 
selectPeople.addEventListener('change', updatePrice);