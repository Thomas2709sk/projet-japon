// Class pour info Guide
class Guide {
  constructor(langues, specialite, preferences, description) {
    this.langues = langues;  
    this.specialite = specialite;  
    this.preferences = preferences;  
    this.description = description;  
  }
}

const guideOliver = new Guide(
  ["Japonais", "Anglais"],
  "Vie locale",
  "Non-Fumeur",
  "Bonjour, je m'appelle Oliver, et je suis passionné par la vie au Japon. Je serai heureux de vous guider à travers la richesse locale du Japon."
);

const guideHaruto = new Guide(
  ["Japonais", "Anglais"], 
  "Histoire", 
  "Fumeur Ok", 
  "Je suis guide touristique spécialisé dans l'histoire du Japon. Je serai ravi de vous faire découvrir la culture et l'histoire de mon pays."
);

const guideYuki = new Guide(
  ["Français", "Japonais"], 
  "Randonée", 
  "Non-Fumeur", 
  "Je suis Yuki, guide passionnée par la nature japonaise. J'aime faire découvrir les paysages magnifiques du Japon à travers des randonnées."
);

// Création class Réservation 

class Reservation {
    constructor(id, date, depart, fin, ville, repasCompris, places, guideNom, guideImage, guideNote, prix, guide) {
        this.id = id;
      this.date = date;
      this.depart = depart;
      this.fin = fin;
      this.ville = ville;
      this.repasCompris = repasCompris;
      this.places = places;
      this.guideNom = guideNom;
      this.guideImage = guideImage;
      this.guideNote = guideNote;
      this.prix = prix;
      // Appel classe guide
      this.guide = guide;
    }

  
    // Créer la card pour l'ajouter à la page
    generateCard() {
      const reservation = this;
  
      const card = document.createElement('div');
      card.classList.add('container', 'mt-5', 'col-lg-6', 'col-md-6', 'col-sm-10');
  
      card.innerHTML = `
    <div class="card shadow-lg card-guide">
        <a href="/pages/Reservation/reservationDetails.html?id=${reservation.id}" target="_blank">
            <div class="card-body">
                <div class="row mb-2 border-bottom pb-2">
                <div class="col-lg-4">
                    <strong>Date :</strong> ${reservation.date}
                </div>
                <div class="col-lg-4">
                    <strong>Départ :</strong> ${reservation.depart}
                </div>
                <div class="col-lg-4">
                    <strong>Fin :</strong> ${reservation.fin}
                </div>
                <div class="col-lg-4">
                    <strong>Ville :</strong> ${reservation.ville}
                </div>
                <div class="col-lg-4">
                    <strong>Repas compris :</strong> ${reservation.repasCompris}
                </div>
                <div class="col-lg-4">
                    <strong>Nombre de places :</strong> ${reservation.places}
                </div>
                </div>
            </div>
            <div class="mb-2 d-flex align-items-center">
                <div class="ms-3">
                <img src="${reservation.guideImage}" alt="Photo du guide" class="rounded-circle" width="50" height="50">
                </div>
                <div class="ms-1">
                <strong>${reservation.guideNom}</strong>
                </div>
                <div class="ms-2">
                <b>${reservation.guideNote} <i class="fa-solid fa-star text-warning"></i></b>
                </div>
                <div class="ms-3">
                <strong>Prix :</strong> ${reservation.prix}
                </div>
            </div>
        </a>
    </div>
      `;
  
      return card;
    }
  }
  
    //Données de la reservation   
  const reservations = [
    new Reservation("2721", "6 Mars 2025", "10:00", "18:00", "Kyoto", "Non", 0, "Oliver", "/assets/img/okinawa2.jpg", 4, "15 Crédits", guideOliver),
    new Reservation("2722", "6 Mars 2025", "9:00", "17:00", "Himeji", "Oui", 2, "Haruto", "/assets/img/kansai2.jpg", 3, "30 Crédits", guideHaruto),
    new Reservation("2723", "6 Mars 2025", "8:30", "16:30", "Osaka", "Non", 1, "Yuki", "/assets/img/chubu2.jpg", 4, "18 Crédits", guideYuki)
  ];
  
  
  function displayReservations() {
    const container = document.getElementById('reservations-container');
  
    //chaque réservation affiche une carte
    reservations.forEach(reservation => {
      const card = reservation.generateCard();
      container.appendChild(card);
    });
  }
  

  displayReservations();
  