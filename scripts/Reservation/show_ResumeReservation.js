// Récupérer l'ID de la réservation dans l'URL
const params = new URLSearchParams(window.location.search);
const reservationId = params.get('id'); 

// Trouver la réservation correspondante
const reservation = reservations.find(reservation => reservation.id === reservationId);

// Si la réservation est trouvée
if (reservation) {
    // Resume section
  document.getElementById('reservation-date').innerText = reservation.date;
  document.getElementById('reservation-depart').innerText = reservation.depart;
  document.getElementById('reservation-fin').innerText = reservation.fin;
  document.getElementById('reservation-ville').innerText = reservation.ville;
  document.getElementById('reservation-repas').innerText = reservation.repasCompris;
    //Price section   
  document.getElementById('reservation-prix').innerText = reservation.prix;
    //Guide section   
  document.getElementById('guide-image').src = reservation.guideImage;
  document.getElementById('reservation-guide').innerText = reservation.guideNom;
  document.getElementById('guide-note').innerText = reservation.guideNote;
    //Modal   
  document.getElementById('price-modal').innerText = reservation.prix;

  // Détails du guide
  const guide = reservation.guide;  
  //guide
  document.getElementById('guide-languages').innerText = `${guide.langues.join(', ')}`;
  document.getElementById('guide-specialty').innerText = `${guide.specialite}`;
  document.getElementById('guide-preferences').innerText = `${guide.preferences}`;
  document.getElementById('guide-description').innerText = `${guide.description}`;
} else {
  // Si la réservation n'est pas trouvée
  document.getElementById('reservation-container').innerHTML = "<p>Réservation non trouvée.</p>";
  document.getElementById('price-container').innerHTML = "<p>Réservation non trouvée.</p>";
  document.getElementById('guide-details').innerHTML = "<p>Guide non trouvée.</p>";
}
