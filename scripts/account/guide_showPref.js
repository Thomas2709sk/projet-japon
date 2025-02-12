
// Affiche/masque deuxieme ville pour Guide
const addPrefBtn = document.getElementById('preferences');
const secondPref = document.getElementById('other_Pref');

addPrefBtn.addEventListener('click', function() {
    secondPref.classList.toggle('d-none');
    
   
    if (secondPref.classList.contains('d-none')) {
        addPrefBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Ajouter une préférence';
    } else {
        addPrefBtn.innerHTML = '<i class="fas fa-minus-circle"></i> Cacher la préférence';
    }
});