// ²Changement barre de prix dans Reservation Form
    const prixRange = document.getElementById('guidePrice');
    const priceValue = document.getElementById('priceValue');
    
        guidePrice.addEventListener('input', function() {
        priceValue.textContent = guidePrice.value;
    });
