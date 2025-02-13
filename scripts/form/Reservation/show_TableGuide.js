// Affiche liste des guides 
document.getElementById("btn-reserv").addEventListener("click", function(event) {
    event.preventDefault();  
    document.getElementById("guideAvailable").classList.remove("d-none");
  });