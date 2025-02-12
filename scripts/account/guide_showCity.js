
// Affiche/masque deuxieme ville pour Guide
    const addCityBtn = document.getElementById('City');
    const secondCity = document.getElementById('secondCity');
    
    addCityBtn.addEventListener('click', function() {
        secondCity.classList.toggle('d-none');
        
       
        if (secondCity.classList.contains('d-none')) {
            addCityBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Ajouter une autre ville';
        } else {
            addCityBtn.innerHTML = '<i class="fas fa-minus-circle"></i> Cacher la deuxième ville';
        }
    });


    // Afficher 2nde ville Réservation(guide)
    const addCityReservBtn = document.getElementById('addCityReservBtn');
    const newCityReserv = document.getElementById('newCityReserv');

addCityReservBtn.addEventListener('click', function() {
    newCityReserv.classList.toggle('d-none'); 

    if (newCityReserv.classList.contains('d-none')) {
        addCityReservBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Ajouter une autre ville';
    } else {
        addCityReservBtn.innerHTML = '<i class="fas fa-minus-circle"></i> Cacher la nouvelle ville';
    }
});
